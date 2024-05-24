from PIL import Image
import os

def convert_png_to_webp(input_folder, output_folder, quality=85):
    """
    Convert all PNG images in a folder to WebP format with specified quality.

    :param input_folder: The folder containing PNG images.
    :param output_folder: The folder where WebP images will be saved.
    :param quality: The quality of the WebP image (0 to 100).
    """
    # Ensure output folder exists
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # List all files in the input folder
    for filename in os.listdir(input_folder):
        if filename.endswith('.png'):
            # Construct the full file paths
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, f"{os.path.splitext(filename)[0]}.webp")

            # Open the PNG image
            with Image.open(input_path) as img:
                # Convert and save as WebP
                img.save(output_path, 'WEBP', quality=quality)
            print(f"Converted {filename} to WebP")

# Example usage
convert_png_to_webp('.', '.', quality=85)
