/**
 * 波多地区・波多神社 魅力紹介 スクリプト
 * 掛合分校 探究プロジェクト
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. スクロール時のヘッダー制御 & トップへ戻るボタン
  const siteHeader = document.querySelector('.site-header');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // ヘッダーのシャドウ
    if (scrollY > 50) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    // トップへ戻るボタンの表示・非表示
    if (scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  // 2. モバイルナビゲーション（ハンバーガーメニュー）
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
      const isOpen = siteNav.classList.contains('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // メニュー内リンククリックで自動的にメニューを閉じる
    siteNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. ギャラリーフィルター
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // アクティブボタン切り替え
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const categories = item.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // 4. ヒーロー背景画像のクロスフェード切り替え
  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    const heroImages = [
      './img/波多神社 (5).jpg',
      './img/はやしこ奉納.jpg'
    ];
    let currentImgIdx = 0;

    setInterval(() => {
      currentImgIdx = (currentImgIdx + 1) % heroImages.length;
      heroBg.style.opacity = '0';
      setTimeout(() => {
        heroBg.src = heroImages[currentImgIdx];
        heroBg.style.opacity = '1';
      }, 500);
    }, 7000);
  }

  // 5. Escキーでモーダルを閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});

// モーダル操作関数（グローバルスコープ）
function openModal(imgSrc, title, desc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');

  if (modal && modalImg && modalTitle && modalDesc) {
    modalImg.src = imgSrc;
    modalImg.alt = title;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // 背景スクロール固定
  }
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // スクロール復帰
  }
}

function closeModalOnBackdrop(event) {
  if (event.target.id === 'imageModal') {
    closeModal();
  }
}
