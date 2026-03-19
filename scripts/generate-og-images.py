"""
Genera imágenes OG 1200×630 con estilo cyberpunk dark para Trenkit.
Usa el logo como elemento central sobre un fondo oscuro con acento neón.

Requiere: Pillow  →  pip install Pillow
"""

from PIL import Image, ImageDraw, ImageFont
import os

PUBLIC_DIR = os.path.join(os.path.dirname(__file__), '..', 'public')
LOGO_PATH  = os.path.join(PUBLIC_DIR, 'trenkit_logo.png')

WIDTH, HEIGHT = 1200, 630

CYAN   = (0, 229, 255)
PURPLE = (176, 0, 255)
PINK   = (255, 0, 144)
BG     = (8, 11, 20)
BG2    = (13, 17, 23)

SECTIONS = [
    {
        'filename': 'og-image.png',
        'tag':      'STUDIO',
        'title':    'Apps & Games\nDevelopment',
        'subtitle': 'We build apps and games that push the frontier',
        'accent':   CYAN,
    },
    {
        'filename': 'og-apps.png',
        'tag':      'SERVICES',
        'title':    'Mobile & Web\nApplications',
        'subtitle': 'React Native · Next.js · Vue.js — iOS, Android & Web',
        'accent':   (0, 180, 255),
    },
    {
        'filename': 'og-games.png',
        'tag':      'GAMES',
        'title':    'Video Game\nDevelopment',
        'subtitle': 'Unity & C# — From concept to App Store launch',
        'accent':   PURPLE,
    },
]


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def draw_gradient_bg(img):
    draw = ImageDraw.Draw(img)
    for y in range(HEIGHT):
        t = y / HEIGHT
        color = lerp(BG, BG2, t)
        draw.line([(0, y), (WIDTH, y)], fill=color)


def draw_dot_grid(img, accent):
    overlay = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    for x in range(0, WIDTH + 1, 40):
        for y in range(0, HEIGHT + 1, 40):
            d.ellipse([x-1, y-1, x+1, y+1], fill=(*accent, 25))
    img.paste(Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB'))


def draw_neon_lines(img, accent):
    overlay = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    # Top accent bar
    d.rectangle([0, 0, WIDTH, 3], fill=(*accent, 255))
    # Bottom accent bar
    d.rectangle([0, HEIGHT - 3, WIDTH, HEIGHT], fill=(*accent, 200))
    # Diagonal decorative line
    d.line([(WIDTH - 280, 0), (WIDTH, 0), (WIDTH, 220)], fill=(*accent, 120), width=1)
    d.line([(WIDTH - 240, 0), (WIDTH, 0), (WIDTH, 180)], fill=(*accent, 50), width=1)
    img.paste(Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB'))


def draw_glow_circle(img, accent):
    overlay = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    cx, cy = WIDTH - 200, HEIGHT // 2
    for r, alpha in [(280, 6), (200, 10), (130, 16), (80, 22)]:
        d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(*accent, alpha))
    img.paste(Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB'))


def add_logo(img, accent):
    try:
        logo = Image.open(LOGO_PATH).convert('RGBA')
        size = 200
        logo = logo.resize((size, size), Image.LANCZOS)
        # Glow halo
        halo = Image.new('RGBA', (size + 60, size + 60), (0, 0, 0, 0))
        hd = ImageDraw.Draw(halo)
        for r, a in [(size // 2 + 28, 8), (size // 2 + 18, 14), (size // 2 + 8, 20)]:
            cx, cy = (size + 60) // 2, (size + 60) // 2
            hd.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(*accent, a))
        lx = WIDTH - size - 80
        ly = (HEIGHT - size) // 2
        img_rgba = img.convert('RGBA')
        img_rgba.paste(halo, (lx - 30, ly - 30), halo)
        img_rgba.paste(logo, (lx, ly), logo)
        return img_rgba.convert('RGB')
    except Exception as e:
        print(f"  [warning] Logo: {e}")
        return img


def get_fonts():
    candidates_sans = [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/SFNSDisplay.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]
    candidates_mono = [
        "/Library/Fonts/Courier New.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf",
    ]

    def try_fonts(paths, size):
        for p in paths:
            try:
                return ImageFont.truetype(p, size)
            except (IOError, OSError):
                pass
        return ImageFont.load_default()

    return {
        'tag':      try_fonts(candidates_mono, 13),
        'title_lg': try_fonts(candidates_sans, 68),
        'title_md': try_fonts(candidates_sans, 52),
        'subtitle': try_fonts(candidates_sans, 22),
        'brand':    try_fonts(candidates_mono, 16),
        'url':      try_fonts(candidates_mono, 14),
    }


def text_fits(draw, text, font, max_width):
    bbox = draw.textbbox((0, 0), text, font=font)
    return (bbox[2] - bbox[0]) <= max_width


def generate_og_image(section, fonts):
    img = Image.new('RGB', (WIDTH, HEIGHT))
    draw_gradient_bg(img)
    draw_dot_grid(img, section['accent'])
    draw_glow_circle(img, section['accent'])
    draw_neon_lines(img, section['accent'])
    img = add_logo(img, section['accent'])

    draw = ImageDraw.Draw(img)
    accent = section['accent']

    # Tag / eyebrow
    tag_text = f"// {section['tag']}"
    draw.text((80, 160), tag_text, fill=(*accent, 180), font=fonts['tag'])

    # Title — pick size that fits
    title_lines = section['title'].split('\n')
    title_font = fonts['title_lg'] if text_fits(draw, title_lines[0], fonts['title_lg'], 700) else fonts['title_md']
    y = 190
    for i, line in enumerate(title_lines):
        if i == 0:
            draw.text((80, y), line, fill=(255, 255, 255, 255), font=title_font)
        else:
            # Gradient-like: second line in accent color
            draw.text((80, y), line, fill=(*accent, 240), font=title_font)
        bbox = draw.textbbox((0, 0), line, font=title_font)
        y += (bbox[3] - bbox[1]) + 8

    # Divider line
    y += 12
    draw.rectangle([80, y, 80 + 180, y + 2], fill=(*accent, 255))
    y += 20

    # Subtitle
    draw.text((80, y), section['subtitle'], fill=(200, 216, 240, 160), font=fonts['subtitle'])

    # Brand + URL at bottom
    draw.text((80, HEIGHT - 90), "TRENKIT STUDIO", fill=(*accent, 120), font=fonts['brand'])
    draw.text((80, HEIGHT - 65), "trenkit.com", fill=(*accent, 200), font=fonts['url'])

    # Save
    dest = os.path.join(PUBLIC_DIR, section['filename'])
    img.save(dest, 'PNG', optimize=True)
    size_kb = os.path.getsize(dest) / 1024
    print(f"  ✓ {section['filename']} ({WIDTH}×{HEIGHT}, {size_kb:.0f} KB)")


def main():
    print("[generate-og] Generating cyberpunk OG images 1200×630...")
    if not os.path.exists(LOGO_PATH):
        print(f"  ✗ Logo not found: {LOGO_PATH}")
        return

    fonts = get_fonts()
    for section in SECTIONS:
        generate_og_image(section, fonts)

    print(f"[generate-og] {len(SECTIONS)} images saved to public/")


if __name__ == '__main__':
    main()
