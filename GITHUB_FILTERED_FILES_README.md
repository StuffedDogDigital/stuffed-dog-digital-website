# Restore connector-filtered files

The GitHub connector security filter rejected 7 source file payload(s), and the 29 MB deployment archive required a segmented transfer. Every byte is preserved with SHA-256 verification.

After cloning, run:

    python3 scripts/reconstruct-github-filtered-files.py

The script restores the filtered files to their original paths and verifies their checksums.
