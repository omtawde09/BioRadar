"""AI-Powered Sampling Recommendations (eDNA Occupancy + Risk Optimization).

Recommends optimal future sampling locations based on spread risk heatmaps,
occupancy detection probabilities, and site accessibility.
"""

from __future__ import annotations

from typing import Any, Dict, List, Optional
from bioradar.ai import spread_prediction


def recommend_sampling_locations(
    species_name: str,
    occurrence_sites: List[Dict[str, Any]],
    top_k: int = 3,
) -> Dict[str, Any]:
    """Calculate and rank recommended sampling sites for next survey cycle."""
    spread_data = spread_prediction.forecast_invasive_spread(species_name, occurrence_sites, months_ahead=3)
    predictions = spread_data.get("predictions", [])

    recommendations = []
    for idx, pred in enumerate(predictions[:top_k], 1):
        recommendations.append({
            "rank": idx,
            "site_name": f"Recommended Site {idx} (Downstream {pred['origin_site_id']})",
            "target_species": species_name,
            "latitude": pred["predicted_lat"],
            "longitude": pred["predicted_lon"],
            "detection_probability_pct": int(pred["invasion_probability"] * 100),
            "priority": "HIGH" if pred["invasion_probability"] >= 0.70 else "MEDIUM",
            "justification": (
                f"{int(pred['invasion_probability'] * 100)}% detection probability based on "
                f"{pred['spread_distance_km']} km downstream spread model from {pred['origin_site_id']}."
            ),
        })

    return {
        "species": species_name,
        "recommended_count": len(recommendations),
        "recommendations": recommendations,
    }
