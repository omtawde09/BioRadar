from bioradar.blockchain_ledger import MerkleTree, generate_blockchain_proof, sha256


def test_sha256_hashing():
    h = sha256("test_payload")
    assert len(h) == 64
    assert isinstance(h, str)


def test_merkle_tree_construction():
    leaves = ["leaf1", "leaf2", "leaf3", "leaf4"]
    tree = MerkleTree(leaves)
    root = tree.root()
    assert len(root) == 64
    proof = tree.get_proof(0)
    assert len(proof) > 0
    assert "hash" in proof[0]


def test_generate_blockchain_proof():
    mock_pts = [
        {"site_id": "GOA-MANDOVI", "latitude": 15.4989, "longitude": 73.8278, "species_count": 7, "total_reads": 4694}
    ]
    proof = generate_blockchain_proof("demo_run_1", mock_pts)
    assert proof["run_id"] == "demo_run_1"
    assert proof["chain_of_custody_status"] == "CRYPTOGRAPHICALLY_VERIFIED_UNTAMPERED"
    assert proof["merkle_root"].startswith("0x")
    assert proof["tx_hash"].startswith("0x")
    assert len(proof["leaves"]) == 1
