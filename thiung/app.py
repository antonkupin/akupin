import os
from flask import Flask, request, send_file, jsonify
from PIL import Image
from fpdf import FPDF
import io
import openai

# Set your OpenAI API key
openai.api_key = "YOUR_OPENAI_API_KEY"

app = Flask(__name__)

@app.route('/api/generate-pdf', methods=['POST'])
def generate_pdf():
    # Get files and details
    front = request.files.get('front')
    back = request.files.get('back')
    details = request.form.get('details', '{}')

    # Use OpenAI to generate a description/specs
    prompt = f"Generate a professional product description and specifications for a garment with these details: {details}"
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=300
    )
    ai_text = response.choices[0].message.content.strip()

    # Create PDF
    pdf = FPDF()
    for img_file, label in [(front, "Front"), (back, "Back")]:
        if img_file:
            img = Image.open(img_file.stream)
            img_io = io.BytesIO()
            img.save(img_io, 'PNG')
            img_io.seek(0)
            pdf.add_page()
            pdf.set_font("Arial", "B", 16)
            pdf.cell(0, 10, label, ln=1, align='C')
            # Place image (fit to page)
            pdf.image(img_io, x=10, y=20, w=pdf.w - 20)
    # Add AI-generated text
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    pdf.multi_cell(0, 10, ai_text)

    output = io.BytesIO()
    pdf.output(output)
    output.seek(0)
    return send_file(output, mimetype='application/pdf', as_attachment=True, download_name='ai-generated.pdf')

if __name__ == '__main__':
    app.run(debug=True)