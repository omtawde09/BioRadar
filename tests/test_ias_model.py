from bioradar.ai.ias_model import predict_establishment_risk, predict_all_invasives_for_run


def test_predict_establishment_risk():
    res = predict_establishment_risk(
        species_name="Oreochromis mossambicus",
        site_name="Mandovi Estuary",
        waterbody_type="estuary",
        read_count=1800,
        total_reads=4694,
        water_bod=3.8
    )
    assert res["species_name"] == "Oreochromis mossambicus"
    assert "establishment_probability" in res
    assert res["establishment_probability"] >= 0.0 and res["establishment_probability"] <= 100.0
    assert res["risk_level"] in ["CRITICAL_INVASION_TAKEOVER", "MODERATE_ESTABLISHMENT_RISK", "LOW_TRANSIENT_DRIFT"]
    assert len(res["threat_drivers"]) > 0


def test_predict_all_invasives_for_run():
    mock_report = {
        "total_reads": 5000,
        "top_species": [
            {"name": "Oreochromis mossambicus", "reads": 1500},
            {"name": "Tor putitora", "reads": 200}
        ]
    }
    results = predict_all_invasives_for_run(mock_report)
    assert len(results) >= 1
    assert results[0]["species_name"] == "Oreochromis mossambicus"
