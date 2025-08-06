#!/usr/bin/env python3
"""
Thumbnail Generator for TIYPN SS25 Collection
Creates optimized thumbnails for faster loading on GitHub Pages
"""

import os
from PIL import Image
import glob

def create_thumbnail(input_path, output_path, size=(200, 150)):
    """Create a thumbnail from the input image"""
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')
            
            # Create thumbnail
            img.thumbnail(size, Image.Resampling.LANCZOS)
            
            # Save with optimization
            img.save(output_path, 'PNG', optimize=True, quality=85)
            print(f"Created thumbnail: {output_path}")
            
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

def main():
    """Generate thumbnails for all images in assets folder"""
    
    # Create thumbnails directory
    thumbnails_dir = "assets/thumbnails"
    os.makedirs(thumbnails_dir, exist_ok=True)
    
    # Find all PNG images in assets
    image_files = glob.glob("assets/*.png")
    
    print(f"Found {len(image_files)} images to process...")
    
    for image_file in image_files:
        filename = os.path.basename(image_file)
        thumbnail_path = os.path.join(thumbnails_dir, f"thumb_{filename}")
        
        create_thumbnail(image_file, thumbnail_path)
    
    print("\nThumbnail generation complete!")
    print(f"Thumbnails saved in: {thumbnails_dir}")
    print("\nTo use thumbnails in the gallery, update the HTML to use:")
    print("assets/thumbnails/thumb_[filename] for thumbnail images")

if __name__ == "__main__":
    main() 