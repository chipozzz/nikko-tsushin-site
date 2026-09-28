// ニッコー通信株式会社 コーポレートサイト 共通スクリプト

document.addEventListener('DOMContentLoaded', function () {

  // ---- モバイルナビ開閉 ----
  var hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
      var expanded = document.body.classList.contains('nav-open');
      hamburger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // ---- FAQアコーディオン ----
  document.querySelectorAll('.accordion-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.accordion-item');
      var wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.accordion-item.open').forEach(function (openItem) {
        if (openItem !== item) openItem.classList.remove('open');
      });
      item.classList.toggle('open', !wasOpen);
    });
  });

  // ---- 施工実績フィルタ ----
  var filterBtns = document.querySelectorAll('.filter-btn');
  var workCards = document.querySelectorAll('.work-card');
  if (filterBtns.length && workCards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var category = btn.dataset.filter;
        workCards.forEach(function (card) {
          var match = category === 'all' || card.dataset.category === category;
          card.classList.toggle('show', match);
        });
      });
    });
  }

});
