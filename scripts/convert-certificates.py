"""
Convert PDF files in ./certificates to JPG previews in ./public/certificates.

Usage:
  pip install pymupdf
  python scripts/convert-certificates.py
"""

from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "certificates"
OUTPUT = ROOT / "public" / "certificates"


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    pdfs = sorted(SOURCE.glob("*.pdf"))

    if not pdfs:
        print("No PDF files found in certificates/")
        return

    for pdf in pdfs:
        doc = fitz.open(pdf)
        page = doc[0]
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
        out_path = OUTPUT / f"{pdf.stem}.jpg"
        pix.save(str(out_path))
        doc.close()
        print(f"Created {out_path.name} ({pix.width}x{pix.height})")


if __name__ == "__main__":
    main()
