import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  // Define local business JSON-LD structured data for Google SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Bánh Mì Phước Hưng",
    "image": [
      "https://banh-mi-phuoc-hung.vercel.app/hero_banner.png",
      "https://banh-mi-phuoc-hung.vercel.app/banh_mi_thit.png",
      "https://banh-mi-phuoc-hung.vercel.app/banh_mi_khong.png"
    ],
    "@id": "https://banh-mi-phuoc-hung.vercel.app/#bakery",
    "url": "https://banh-mi-phuoc-hung.vercel.app",
    "telephone": "0919123456",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gần bệnh viện Định Quán, Quốc Lộ 20",
      "addressLocality": "Xã Định Quán, Huyện Định Quán",
      "addressRegion": "Đồng Nai",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.121973692087524,
      "longitude": 107.34863371480387
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "05:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://www.facebook.com/banhmiphuochung"
    ]
  };

  return (
    <>
      {/* Inject JSON-LD Schema for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header / Navigation */}
      <header className={styles.header}>
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.logo}>
            <span className={styles.logoTitle}>PHƯỚC HƯNG</span>
            <span className={styles.logoSubtitle}>Bánh Mì Truyền Thống</span>
          </div>
          <nav>
            <ul className={styles.navMenu}>
              <li><a href="#trang-chu" className={styles.navLink}>Trang Chủ</a></li>
              <li><a href="#cau-chuyen" className={styles.navLink}>Câu Chuyện</a></li>
              <li><a href="#thuc-don" className={styles.navLink}>Thực Đơn</a></li>
              <li><a href="#dia-chi" className={styles.navLink}>Địa Chỉ</a></li>
            </ul>
          </nav>
          <a href="tel:0919123456" className={styles.headerButton}>
            Gọi Ngay: 0919 123 456
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="trang-chu" className={styles.hero}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>🔥 Bánh Mì Nóng Giòn Mỗi Ngày</div>
              <h1 className={styles.heroTitle}>
                Hương Vị Bánh Mì <br />
                <span className={styles.heroTitleHighlight}>Phước Hưng</span> Trứ Danh
              </h1>
              <p className={styles.heroDesc}>
                Chào mừng bạn đến với Bánh Mì Phước Hưng tại Định Quán - Đồng Nai. Chúng tôi mang đến những ổ bánh mì thịt đặc sắc thơm ngon đậm vị, bánh mì không giòn rụm và nhiều loại bánh ngọt hảo hạng khác để khởi đầu ngày mới trọn vẹn.
              </p>
              <div className={styles.heroActions}>
                <a href="tel:0919123456" className={styles.btnPrimary}>
                  {/* Phone Icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Đặt Hàng Ngay
                </a>
                <a href="#thuc-don" className={styles.btnSecondary}>
                  {/* Book Open Icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  Xem Thực Đơn
                </a>
              </div>
            </div>
            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImageContainer}>
                <Image
                  src="/hero_banner.png"
                  alt="Bánh Mì Phước Hưng giòn ngon đậm đà"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Info / Story Section */}
        <section id="cau-chuyen" className={styles.info}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionSubtitle}>Tinh Hoa Nghề Bánh</span>
              <h2 className={styles.sectionTitle}>Giữ Trọn Hương Vị Truyền Thống</h2>
              <p className={styles.sectionDesc}>
                Tại Bánh Mì Phước Hưng, mỗi sản phẩm ra đời đều là kết tinh của sự tận tâm, nguyên liệu tươi sạch tinh tuyển và công thức nước sốt bí truyền đặc trưng của vùng Định Quán.
              </p>
            </div>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoIconWrapper}>
                  {/* Sparkles Icon */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                </div>
                <h3 className={styles.infoCardTitle}>Nóng Giòn 100%</h3>
                <p className={styles.infoCardDesc}>
                  Bánh mì luôn được nướng mới liên tục trong ngày, đảm bảo lớp vỏ vàng ươm, giòn rụm và phần ruột mềm ẩm thơm lừng hương bột mì cao cấp.
                </p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIconWrapper}>
                  {/* Heart Icon */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <h3 className={styles.infoCardTitle}>Nguyên Liệu Tươi Sạch</h3>
                <p className={styles.infoCardDesc}>
                  Pâté nhà làm béo ngậy, thịt xá xíu đậm đà, chả lụa hảo hạng cùng các loại dưa chua, hành ngò tươi sạch đạt chuẩn an toàn vệ sinh thực phẩm.
                </p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIconWrapper}>
                  {/* Award Icon */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                </div>
                <h3 className={styles.infoCardTitle}>Nước Sốt Độc Quyền</h3>
                <p className={styles.infoCardDesc}>
                  Nước sốt chan bánh mì sánh mịn độc quyền theo công thức gia truyền mang đến sự cân bằng hoàn hảo giữa vị mặn, ngọt và béo ngậy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="thuc-don" className={styles.menu}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionSubtitle}>Khám Phá Menu</span>
              <h2 className={styles.sectionTitle}>Các Món Bánh Nổi Bật</h2>
              <p className={styles.sectionDesc}>
                Từ những ổ bánh mì thịt truyền thống đậm đà cho đến các loại bánh ngọt, bánh nướng thơm lừng phù hợp cho mọi nhu cầu thưởng thức.
              </p>
            </div>
            <div className={styles.menuGrid}>
              {/* Product 1 */}
              <div className={styles.menuCard}>
                <div className={styles.menuImageContainer}>
                  <Image
                    src="/banh_mi_thit.png"
                    alt="Bánh mì thịt đặc biệt Phước Hưng"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className={styles.menuImage}
                  />
                  <span className={styles.menuBadge}>Bán Chạy 🔥</span>
                </div>
                <div className={styles.menuInfo}>
                  <div className={styles.menuHeader}>
                    <h3 className={styles.menuTitle}>Bánh Mì Thịt Đặc Biệt</h3>
                    <span className={styles.menuPrice}>25.000đ</span>
                  </div>
                  <p className={styles.menuDesc}>
                    Sự kết hợp hoàn hảo giữa pate béo ngậy, bơ trứng tươi, chả lụa thịt nguội đặc sắc, dưa chua, ngò rí tươi ngon và nước sốt chan gia truyền đậm đà ngon khó cưỡng.
                  </p>
                  <div className={styles.menuFooter}>
                    <span className={styles.menuTag}>Ăn Sáng / Ăn Trưa</span>
                    <a href="tel:0919123456" className={styles.orderLink}>
                      Đặt mua
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className={styles.menuCard}>
                <div className={styles.menuImageContainer}>
                  <Image
                    src="/banh_mi_khong.png"
                    alt="Bánh mì không nóng giòn Phước Hưng"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className={styles.menuImage}
                  />
                  <span className={styles.menuBadge}>Nướng Mới 🥖</span>
                </div>
                <div className={styles.menuInfo}>
                  <div className={styles.menuHeader}>
                    <h3 className={styles.menuTitle}>Bánh Mì Không Giòn Rụm</h3>
                    <span className={styles.menuPrice}>5.000đ</span>
                  </div>
                  <p className={styles.menuDesc}>
                    Ổ bánh mì baguette chuẩn vị Việt Nam với lớp vỏ giòn tan vàng rực, bên trong ruột xốp mềm dai ngọt tự nhiên từ bột mì. Thích hợp dùng kèm sữa đặc, bò kho hoặc heo quay.
                  </p>
                  <div className={styles.menuFooter}>
                    <span className={styles.menuTag}>Nóng Hổi Mỗi Giờ</span>
                    <a href="tel:0919123456" className={styles.orderLink}>
                      Đặt mua
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className={styles.menuCard}>
                <div className={styles.menuImageContainer}>
                  <Image
                    src="/banh_ngot_khac.png"
                    alt="Các loại bánh ngọt và bánh nướng khác tại Phước Hưng"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className={styles.menuImage}
                  />
                  <span className={styles.menuBadge}>Hảo Hạng 🍰</span>
                </div>
                <div className={styles.menuInfo}>
                  <div className={styles.menuHeader}>
                    <h3 className={styles.menuTitle}>Bánh Ngọt & Bánh Khác</h3>
                    <span className={styles.menuPrice}>15.000đ+</span>
                  </div>
                  <p className={styles.menuDesc}>
                    Khám phá thêm các loại bánh ngọt đa dạng như bánh sừng bò (Croissant), bánh bông lan trứng muối mềm tan, bánh su kem ngậy béo cùng nhiều loại bánh nướng bánh kem đa dạng tại quầy.
                  </p>
                  <div className={styles.menuFooter}>
                    <span className={styles.menuTag}>Thực Đơn Đa Dạng</span>
                    <a href="tel:0919123456" className={styles.orderLink}>
                      Đặt mua
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <section id="dia-chi" className={styles.location}>
          <div className="container">
            <div className={styles.locationGrid}>
              <div className={styles.locationContent}>
                <span className={styles.sectionSubtitle}>Tìm Kiếm Chúng Tôi</span>
                <h2 className={styles.sectionTitle}>Địa Chỉ Cửa Hàng</h2>
                <p className={styles.sectionDesc} style={{ marginBottom: "40px" }}>
                  Tọa lạc tại trung tâm huyện Định Quán, Đồng Nai. Cực kỳ dễ tìm ngay gần bệnh viện đa khoa khu vực Định Quán. Hãy ghé mua trực tiếp hoặc gọi hotline giao hàng nhanh chóng tận nhà.
                </p>
                <div className={styles.locationList}>
                  <div className={styles.locationItem}>
                    <div className={styles.locationIcon}>
                      {/* MapPin Icon */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div className={styles.locationText}>
                      <span className={styles.locationLabel}>Địa Chỉ</span>
                      <span className={styles.locationVal}>Quốc Lộ 20, Xã Định Quán, Huyện Định Quán, Tỉnh Đồng Nai</span>
                      <span className={styles.locationNote}>📍 Vị trí cực gần Bệnh viện Đa khoa Khu vực Định Quán</span>
                    </div>
                  </div>
                  <div className={styles.locationItem}>
                    <div className={styles.locationIcon}>
                      {/* Phone Icon */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div className={styles.locationText}>
                      <span className={styles.locationLabel}>Hotline Giao Hàng</span>
                      <a href="tel:0919123456" className={styles.locationVal} style={{ color: "var(--primary)", fontWeight: "700" }}>
                        0919 123 456
                      </a>
                    </div>
                  </div>
                  <div className={styles.locationItem}>
                    <div className={styles.locationIcon}>
                      {/* Clock Icon */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div className={styles.locationText}>
                      <span className={styles.locationLabel}>Giờ Hoạt Động</span>
                      <span className={styles.locationVal}>Mở cửa: 05:00 - 21:00 hàng ngày</span>
                      <span className={styles.locationNote}>Phục vụ cả Thứ Bảy, Chủ Nhật và ngày lễ</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mapContainer}>
                <iframe
                  className={styles.mapFrame}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.887259124403!2d107.34863371480387!3d11.121973692087524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317441584c31adfb%3A0xc0688f99e4bbd536!2zQuG7h25oIHZp4buHbiDEkGEga2hvYSBLaHUgduG7sWMgxJDhu4tuaCBRdcOhbg!5e0!3m2!1svi!2s!4v1650000000000!5m2!1svi!2s"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vị trí Bánh Mì Phước Hưng gần Bệnh viện Định Quán"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionSubtitle}>Ý Kiến Khách Hàng</span>
              <h2 className={styles.sectionTitle}>Khách Hàng Nói Gì Về Chúng Tôi</h2>
              <p className={styles.sectionDesc}>
                Những phản hồi chân thực từ quý khách hàng địa phương và khách vãng lai khi ghé thăm Định Quán - Đồng Nai.
              </p>
            </div>
            <div className={styles.testimonialGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className={styles.quote}>
                  &ldquo;Bánh mì thịt ở đây ngon xuất sắc! Pate rất thơm và béo, thịt xá xíu đậm đà kết hợp với nước sốt chan cực kỳ vừa miệng. Bánh giòn lâu. Tôi thường mua ăn sáng trước khi đi làm.&rdquo;
                </p>
                <div className={styles.client}>
                  <div className={styles.clientAvatar}>TH</div>
                  <div className={styles.clientInfo}>
                    <span className={styles.clientName}>Trần Hùng</span>
                    <span className={styles.clientRole}>Người dân tại Định Quán</span>
                  </div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className={styles.quote}>
                  &ldquo;Mỗi lần có việc ghé bệnh viện Định Quán hay đi du lịch qua quốc lộ 20 là phải mua 5-10 ổ bánh mì không đem về. Bánh mì ở đây nướng giòn rụm, ruột xốp thơm bột rất đặc biệt, ăn không cũng ngon.&rdquo;
                </p>
                <div className={styles.client}>
                  <div className={styles.clientAvatar}>ML</div>
                  <div className={styles.clientInfo}>
                    <span className={styles.clientName}>Mai Lan</span>
                    <span className={styles.clientRole}>Khách du lịch vãng lai</span>
                  </div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className={styles.quote}>
                  &ldquo;Bên cạnh bánh mì thịt thì các loại bánh ngọt khác ở đây cũng rất tuyệt. Croissant xốp thơm bơ sữa, các cháu nhà tôi rất thích. Giao hàng qua điện thoại cực nhanh, bánh mang đến vẫn còn ấm giòn.&rdquo;
                </p>
                <div className={styles.client}>
                  <div className={styles.clientAvatar}>AH</div>
                  <div className={styles.clientInfo}>
                    <span className={styles.clientName}>Anh Hoàng</span>
                    <span className={styles.clientRole}>Khách quen tại Định Quán</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Banner */}
        <section className={styles.ctaBanner}>
          <div className="container">
            <h2 className={styles.ctaTitle}>Thưởng Thức Bánh Mì Phước Hưng Ngay Hôm Nay</h2>
            <p className={styles.ctaDesc}>
              Bánh mì nóng giòn đang đợi bạn! Gọi điện ngay để đặt hàng giao tận nơi hoặc nhận tư vấn thực đơn tiệc, hội nghị lớn nhỏ.
            </p>
            <div className={styles.ctaActions}>
              <a href="tel:0919123456" className={styles.btnPrimary} style={{ background: "var(--surface)", color: "var(--secondary)" }}>
                {/* Phone Call Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Gọi Ngay: 0919 123 456
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`container ${styles.footerGrid}`}>
          <div className={styles.footerCol}>
            <div className={styles.footerLogoTitle}>PHƯỚC HƯNG</div>
            <div className={styles.footerLogoSub}>Bánh Mì Truyền Thống</div>
            <p className={styles.footerDesc}>
              Tự hào mang đến hương vị bánh mì truyền thống giòn ngon đậm vị và những chiếc bánh ngọt thơm lừng mỗi ngày cho thực khách tại Định Quán, Đồng Nai.
            </p>
          </div>
          <div className={styles.footerCol}>
            <h3 className={styles.footerColTitle}>Liên Kết</h3>
            <ul className={styles.footerLinks}>
              <li><a href="#trang-chu" className={styles.footerLink}>Trang Chủ</a></li>
              <li><a href="#cau-chuyen" className={styles.footerLink}>Câu Chuyện</a></li>
              <li><a href="#thuc-don" className={styles.footerLink}>Thực Đơn</a></li>
              <li><a href="#dia-chi" className={styles.footerLink}>Địa Chỉ</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h3 className={styles.footerColTitle}>Thông Tin Liên Hệ</h3>
            <div className={styles.footerContactInfo}>
              <div className={styles.footerContactItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <div className={styles.footerContactText}>
                  <span>Quốc Lộ 20, Xã Định Quán, Huyện Định Quán, Đồng Nai</span>
                  <span style={{ fontSize: "12px", fontStyle: "italic", opacity: 0.8 }}>(Gần Bệnh viện Đa khoa Khu vực Định Quán)</span>
                </div>
              </div>
              <div className={styles.footerContactItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:0919123456" style={{ fontWeight: "700", color: "var(--surface)" }}>0919 123 456</a>
              </div>
              <div className={styles.footerContactItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Mở cửa: 05:00 - 21:00 hàng ngày</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`container ${styles.footerBottom}`}>
          <p>&copy; {new Date().getFullYear()} Bánh Mì Phước Hưng. Tất cả các quyền được bảo lưu.</p>
          <p>Thiết kế tinh tế & SEO chuẩn mực cho nền ẩm thực Việt</p>
        </div>
      </footer>

      {/* Floating Action Quick Call Dial */}
      <a href="tel:0919123456" className={styles.floatingCall} aria-label="Gọi điện đặt bánh mì ngay">
        {/* Phone Icon */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
    </>
  );
}
