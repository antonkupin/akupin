#!/usr/bin/env python3
"""
Image Optimizer for TIYPN SS25 Collection
Reduces image file sizes for faster loading on GitHub Pages
"""

import os
import glob
from PIL import Image
import sys

def optimize_image(input_path, output_path, max_size=(400, 300), quality=60):
    """Optimize image for web use"""
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')
            
            # Calculate new size maintaining aspect ratio
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
            
            # Save with aggressive optimization
            img.save(output_path, 'JPEG', optimize=True, quality=quality, progressive=True)
            
            # Get file sizes
            original_size = os.path.getsize(input_path)
            optimized_size = os.path.getsize(output_path)
            reduction = ((original_size - optimized_size) / original_size) * 100
            
            print(f"Optimized: {os.path.basename(input_path)}")
            print(f"  Original: {original_size / 1024:.1f} KB")
            print(f"  Optimized: {optimized_size / 1024:.1f} KB")
            print(f"  Reduction: {reduction:.1f}%")
            print()
            
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

def create_thumbnails(input_path, output_path, size=(150, 100), quality=50):
    """Create small thumbnails for gallery"""
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')
            
            # Create thumbnail
            img.thumbnail(size, Image.Resampling.LANCZOS)
            
            # Save as JPEG for smaller size
            img.save(output_path, 'JPEG', optimize=True, quality=quality, progressive=True)
            
            thumbnail_size = os.path.getsize(output_path)
            print(f"Thumbnail: {os.path.basename(output_path)} - {thumbnail_size / 1024:.1f} KB")
            
    except Exception as e:
        print(f"Error creating thumbnail for {input_path}: {e}")

def main():
    """Optimize all images in assets folder"""
    
    print("=== TIYPN SS25 Image Optimizer ===\n")
    
    # Create optimized directories
    optimized_dir = "assets/optimized"
    thumbnails_dir = "assets/thumbnails"
    os.makedirs(optimized_dir, exist_ok=True)
    os.makedirs(thumbnails_dir, exist_ok=True)
    
    # Find all PNG images in assets
    image_files = glob.glob("assets/*.png")
    
    if not image_files:
        print("No PNG images found in assets folder!")
        return
    
    print(f"Found {len(image_files)} images to optimize...\n")
    
    total_original = 0
    total_optimized = 0
    
    for image_file in image_files:
        filename = os.path.basename(image_file)
        name_without_ext = os.path.splitext(filename)[0]
        
        # Create optimized version
        optimized_path = os.path.join(optimized_dir, f"{name_without_ext}.jpg")
        optimize_image(image_file, optimized_path, max_size=(800, 600), quality=70)
        
        # Create thumbnail
        thumbnail_path = os.path.join(thumbnails_dir, f"thumb_{name_without_ext}.jpg")
        create_thumbnails(image_file, thumbnail_path, size=(120, 80), quality=60)
        
        # Calculate totals
        total_original += os.path.getsize(image_file)
        total_optimized += os.path.getsize(optimized_path)
    
    print("\n=== Optimization Summary ===")
    print(f"Total original size: {total_original / 1024 / 1024:.1f} MB")
    print(f"Total optimized size: {total_optimized / 1024 / 1024:.1f} MB")
    total_reduction = ((total_original - total_optimized) / total_original) * 100
    print(f"Total reduction: {total_reduction:.1f}%")
    
    print("\n=== Usage Instructions ===")
    print("1. Replace image references in HTML with optimized versions:")
    print("   - Use 'assets/optimized/[filename].jpg' for main images")
    print("   - Use 'assets/thumbnails/thumb_[filename].jpg' for thumbnails")
    print("\n2. Update the tiypn-photoshoot.html file to use optimized images")
    print("\n3. The optimized images are much smaller and will load faster!")

if __name__ == "__main__":
    main() 