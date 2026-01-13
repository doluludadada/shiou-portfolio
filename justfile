set shell := ["powershell.exe", "-c"]

scan:
    uv run --with pathspec python scan.py

run:
    pnpm run dev