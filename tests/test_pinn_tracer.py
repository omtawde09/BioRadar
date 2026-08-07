from bioradar.ai.pinn_tracer import predict_upstream_origin, inverse_advection_dispersion_solver


def test_inverse_advection_dispersion_solver():
    res = inverse_advection_dispersion_solver(read_count=1200, total_reads=4694, flow_velocity_ms=0.45, temp_c=28.0)
    assert "travel_time_hrs" in res
    assert "upstream_distance_km" in res
    assert "map_uncertainty_km" in res
    assert res["upstream_distance_km"] > 0.0
    assert res["map_uncertainty_km"] > 0.0


def test_predict_upstream_origin():
    res = predict_upstream_origin(
        site_id="GOA-MANDOVI",
        site_lat=15.4989,
        site_lon=73.8278,
        species_name="Clarias gariepinus",
        read_count=1500,
        total_reads=4694
    )
    assert res["site_id"] == "GOA-MANDOVI"
    assert "predicted_origin" in res
    origin = res["predicted_origin"]
    assert origin["latitude"] != 15.4989 or origin["longitude"] != 73.8278
    assert "map_spatial_uncertainty_km" in origin
    assert len(res["geojson"]["features"]) == 3
