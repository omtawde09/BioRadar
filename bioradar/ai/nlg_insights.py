"""Automated Insight Generation (NLG Data-to-Text) for BioRadar.

Converts complex taxonomy tables, alert lists, and diversity metrics into clear,
executive-level natural-language summaries for non-technical forest officers.
"""

from __future__ import annotations

from typing import Any, Dict, List, Optional
from bioradar.ai import knowledge_base, smart_alerts, xai_explainer


def generate_executive_briefing(
    analysis_result: Dict[str, Any],
    dataset_name: str = "Dataset",
    alerts_data: Optional[Dict[str, Any]] = None,
) -> Dict[str, Any]:
    """Generate a comprehensive natural-language executive briefing."""
    species_list = analysis_result.get("species", [])
    samples_count = len(analysis_result.get("samples", []))
    sites_count = len(analysis_result.get("site_species", {}))
    phyla = analysis_result.get("phyla", [])
    total_detections = analysis_result.get("detections", 0)

    # Filter species
    named_species = [s for s in species_list if s.get("rank") == "species" and not s.get("placeholder")]
    invasive_species = []
    endangered_species = []

    for s in named_species:
        name = s.get("name", "")
        profile = knowledge_base.get_species_profile(name)
        if profile:
            status = profile.get("india_status", "")
            if status == "invasive":
                invasive_species.append((s, profile))
            elif "endangered" in status or "vulnerable" in status:
                endangered_species.append((s, profile))

    # Construct Natural Language Paragraphs
    overview_text = (
        f"Analysis of dataset '{dataset_name}' across {samples_count} sample(s) and {sites_count} site(s) "
        f"identified a total of {len(named_species)} distinct named species across {len(phyla)} phyla "
        f"({total_detections:,} total sequence detections)."
    )

    findings_paragraphs = [overview_text]

    if invasive_species:
        inv_names = ", ".join([p["common_name"] + " (" + s["name"] + ")" for s, p in invasive_species])
        inv_text = (
            f"⚠️ HIGH URGENCY INVASIVE ALERT: {len(invasive_species)} invasive species detected: {inv_names}. "
            "These non-native organisms threaten local aquatic food webs and native fish populations."
        )
        findings_paragraphs.append(inv_text)
    else:
        findings_paragraphs.append("✅ No high-risk invasive alien species were detected in this survey batch.")

    if endangered_species:
        end_names = ", ".join([p["common_name"] + " (" + s["name"] + ")" for s, p in endangered_species])
        end_text = (
            f"🛡️ PROTECTED / THREATENED TAXA DETECTED: {len(endangered_species)} species of high conservation interest "
            f"were confirmed: {end_names}. Habitat integrity in these sampling sites should be prioritized."
        )
        findings_paragraphs.append(end_text)

    # Action Recommendations
    recommended_actions = []
    if invasive_species:
        for s, p in invasive_species:
            reads = s.get("reads", 0)
            sites = s.get("sites", [])
            site_str = ", ".join(sites) if sites else "surveyed waters"
            action = (
                f"Dispatch field verification team to {site_str} within 7 days to confirm "
                f"{p['common_name']} ({s['name']}) presence (detected at {reads:,} reads). "
                f"Protocol: {p.get('action_protocol', 'Deploy net traps.')}"
            )
            recommended_actions.append(action)

    if endangered_species:
        for s, p in endangered_species:
            action = (
                f"Ensure strict environmental monitoring for {p['common_name']} ({s['name']}). "
                f"Refer to {p.get('legal_status', 'protected regulations')}."
            )
            recommended_actions.append(action)

    if not recommended_actions:
        recommended_actions.append(
            "Maintain baseline periodic eDNA sampling schedule (recommended next cycle: 30 days)."
        )

    # Structure Output
    return {
        "dataset_name": dataset_name,
        "executive_summary": " ".join(findings_paragraphs),
        "paragraphs": findings_paragraphs,
        "key_metrics": {
            "total_named_species": len(named_species),
            "invasive_count": len(invasive_species),
            "threatened_count": len(endangered_species),
            "samples_analyzed": samples_count,
            "sites_mapped": sites_count,
        },
        "recommended_actions": recommended_actions,
    }
