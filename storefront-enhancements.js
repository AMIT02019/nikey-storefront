// Nikey Storefront Standalone Interactivity & Cart Controller
(function() {
  'use strict';

  // 1. Embedded Product Catalog
  const CATALOG = {
  "10893259735345": {
    "id": 10893259735345,
    "title": "Luka 5",
    "handle": "air-jordan-12-retro-copy",
    "price": 149.0,
    "formatted_price": "$149.00",
    "image": "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/4.png?v=1792493527",
    "images": [
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/4.png?v=1792493527",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2.png?v=1792493528",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/7.png?v=1792493527",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/8.png?v=1792493527"
    ],
    "options": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "variants": [
      {
        "id": 57015176364337,
        "title": "40",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015176397105,
        "title": "41",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015176429873,
        "title": "42",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015176462641,
        "title": "43",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015176495409,
        "title": "44",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015176528177,
        "title": "45",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015176560945,
        "title": "46",
        "price": 149.0,
        "available": true
      }
    ]
  },
  "10893258457393": {
    "id": 10893258457393,
    "title": "Air Jordan 12 Retro",
    "handle": "tatum-5-orbit-copy",
    "price": 149.0,
    "formatted_price": "$149.00",
    "image": "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2.png?v=1792493528",
    "images": [
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2.png?v=1792493528",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/7.png?v=1792493527",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/8.png?v=1792493527",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/9.png?v=1792493528"
    ],
    "options": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "variants": [
      {
        "id": 57015167025457,
        "title": "40",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015167058225,
        "title": "41",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015167090993,
        "title": "42",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015167123761,
        "title": "43",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015167156529,
        "title": "44",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015167189297,
        "title": "45",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015167222065,
        "title": "46",
        "price": 149.0,
        "available": true
      }
    ]
  },
  "10893258359089": {
    "id": 10893258359089,
    "title": "Tatum 5 Orbit",
    "handle": "tatum-5-orbit",
    "price": 149.0,
    "formatted_price": "$149.00",
    "image": "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/1.png?v=1792493527",
    "images": [
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/1.png?v=1792493527",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/7.png?v=1792493527",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/8.png?v=1792493527",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/9.png?v=1792493528"
    ],
    "options": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "variants": [
      {
        "id": 57015166730545,
        "title": "40",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015166763313,
        "title": "41",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015166796081,
        "title": "42",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015166828849,
        "title": "43",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015166861617,
        "title": "44",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015166894385,
        "title": "45",
        "price": 149.0,
        "available": true
      },
      {
        "id": 57015166927153,
        "title": "46",
        "price": 149.0,
        "available": true
      }
    ]
  },
  "10883683352881": {
    "id": 10883683352881,
    "title": "Hoodie Black",
    "handle": "hoodie-black",
    "price": 199.0,
    "formatted_price": "$199.00",
    "image": "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071101472773.webp?v=1792065527",
    "images": [
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071101472773.webp?v=1792065527",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071101516777.webp?v=1792065529",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071101430110.webp?v=1792065524"
    ],
    "options": [
      "S",
      "L",
      "M",
      "XL"
    ],
    "variants": [
      {
        "id": 56836251681073,
        "title": "S",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56836251713841,
        "title": "L",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56836251746609,
        "title": "M",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56836251779377,
        "title": "XL",
        "price": 199.0,
        "available": true
      }
    ]
  },
  "10883680895281": {
    "id": 10883680895281,
    "title": "Sweatshirt Plus",
    "handle": "sweatshirt-plus",
    "price": 199.0,
    "formatted_price": "$199.00",
    "image": "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071516592552.webp?v=1792065999",
    "images": [
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071516592552.webp?v=1792065999",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071517049148.webp?v=1792066000",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071517017451.webp?v=1792065997"
    ],
    "options": [
      "S",
      "L",
      "M",
      "XL"
    ],
    "variants": [
      {
        "id": 56836143743281,
        "title": "S",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56836143776049,
        "title": "L",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56836143808817,
        "title": "M",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56836143841585,
        "title": "XL",
        "price": 199.0,
        "available": true
      }
    ]
  },
  "10883676602673": {
    "id": 10883676602673,
    "title": "Hoodie",
    "handle": "hoodie",
    "price": 199.0,
    "formatted_price": "$199.00",
    "image": "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071514403809.webp?v=1792065704",
    "images": [
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071514403809.webp?v=1792065704",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071514447647.webp?v=1792065701",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071514388245.webp?v=1792065705"
    ],
    "options": [
      "S",
      "L",
      "M",
      "XL"
    ],
    "variants": [
      {
        "id": 56836002185521,
        "title": "S",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56836002218289,
        "title": "L",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56836002251057,
        "title": "M",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56836002283825,
        "title": "XL",
        "price": 199.0,
        "available": true
      }
    ]
  },
  "10883673653553": {
    "id": 10883673653553,
    "title": "Tshirt",
    "handle": "tshirt",
    "price": 199.0,
    "formatted_price": "$199.00",
    "image": "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071515314737.webp?v=1792065932",
    "images": [
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071515314737.webp?v=1792065932",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071516549024.webp?v=1792065933",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071515554298.webp?v=1792065930"
    ],
    "options": [
      "S",
      "L",
      "M",
      "XL"
    ],
    "variants": [
      {
        "id": 56835911582001,
        "title": "S",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56835911614769,
        "title": "L",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56835911647537,
        "title": "M",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56835911680305,
        "title": "XL",
        "price": 199.0,
        "available": true
      }
    ]
  },
  "10883670835505": {
    "id": 10883670835505,
    "title": "Sweatshirt",
    "handle": "sweatshirt",
    "price": 199.0,
    "formatted_price": "$199.00",
    "image": "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071517318112.webp?v=1792066085",
    "images": [
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071517318112.webp?v=1792066085",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071517384792.webp?v=1792066083",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071517292954.webp?v=1792066088"
    ],
    "options": [
      "S",
      "L",
      "M",
      "XL"
    ],
    "variants": [
      {
        "id": 56835806396721,
        "title": "S",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56835806429489,
        "title": "L",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56835806462257,
        "title": "M",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56835806495025,
        "title": "XL",
        "price": 199.0,
        "available": true
      }
    ]
  },
  "10883669492017": {
    "id": 10883669492017,
    "title": "Blazzer",
    "handle": "blazzer",
    "price": 199.0,
    "formatted_price": "$199.00",
    "image": "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071514560224.webp?v=1792065608",
    "images": [
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071514560224.webp?v=1792065608",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071515248388.webp?v=1792065611",
      "https://cdn.shopify.com/s/files/1/1008/9057/5153/files/2610071514492742.webp?v=1792065606"
    ],
    "options": [
      "S",
      "L",
      "M",
      "XL"
    ],
    "variants": [
      {
        "id": 56835765993777,
        "title": "S",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56835766026545,
        "title": "L",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56835766059313,
        "title": "M",
        "price": 199.0,
        "available": true
      },
      {
        "id": 56835766092081,
        "title": "XL",
        "price": 199.0,
        "available": true
      }
    ]
  }
};

  // 2. LocalStorage Cart Manager
  const CART_STORAGE_KEY = 'nikey_storefront_cart_v1';

  function getCart() {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn('Could not read cart from localStorage', e);
    }
    return {
      items: [],
      item_count: 0,
      total_price: 0
    };
  }

  function saveCart(cart) {
    let count = 0;
    let total = 0;
    cart.items.forEach(it => {
      count += it.quantity;
      total += (it.price * it.quantity);
    });
    cart.item_count = count;
    cart.total_price = total;

    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {}

    updateCartUI(cart);
    return cart;
  }

  function addToCart(item) {
    const cart = getCart();
    const existingIndex = cart.items.findIndex(it => it.id === item.id && it.variant_title === item.variant_title);
    if (existingIndex > -1) {
      cart.items[existingIndex].quantity += (item.quantity || 1);
    } else {
      cart.items.push({
        id: item.id || Date.now(),
        product_id: item.product_id || item.id,
        title: item.title || 'Nikey Streetwear Piece',
        variant_title: item.variant_title || 'Standard',
        price: Number(item.price || 149),
        quantity: Number(item.quantity || 1),
        image: item.image || './assets/images/asset_008_2d791642cbe6.png'
      });
    }
    const updated = saveCart(cart);
    openCartDrawer();
    return updated;
  }

  function updateQuantity(index, delta) {
    const cart = getCart();
    if (cart.items[index]) {
      cart.items[index].quantity += delta;
      if (cart.items[index].quantity <= 0) {
        cart.items.splice(index, 1);
      }
      saveCart(cart);
    }
  }

  function removeItem(index) {
    const cart = getCart();
    if (cart.items[index]) {
      cart.items.splice(index, 1);
      saveCart(cart);
    }
  }

  function clearCart() {
    saveCart({ items: [], item_count: 0, total_price: 0 });
  }

  // 3. UI Update Helpers
  function updateCartUI(cart) {
    // Update badge count in header
    const count = cart.item_count || 0;
    document.querySelectorAll('.cart-bubble__text-count, [data-cart-count], .cart-bubble-count').forEach(el => {
      el.textContent = count;
      if (count > 0) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });

    const bubble = document.querySelector('.cart-bubble');
    if (bubble) {
      if (count > 0) {
        bubble.classList.remove('visually-hidden');
      } else {
        bubble.classList.add('visually-hidden');
      }
    }

    // Update Drawer Contents
    const drawerDialog = document.querySelector('#cart-drawer dialog');
    const cartInner = document.querySelector('.cart-drawer__inner');
    const cartItemsComp = document.querySelector('cart-items-component');

    if (!cartInner || !cartItemsComp) return;

    if (count === 0) {
      cartInner.classList.add('cart-drawer--empty');
      const emptyTpl = document.getElementById('empty-cart-template');
      if (emptyTpl) {
        cartItemsComp.innerHTML = emptyTpl.innerHTML;
      }
    } else {
      cartInner.classList.remove('cart-drawer--empty');
      
      let itemsHtml = cart.items.map((it, idx) => `
        <div class="nikey-cart-item" style="display: flex; gap: 16px; padding: 16px 0; border-bottom: 1px solid rgba(0,0,0,0.08); align-items: center;">
          <img src="${it.image}" alt="${it.title}" style="width: 72px; height: 72px; object-fit: cover; border-radius: 8px; background: #f4f4f4;">
          <div style="flex: 1; min-width: 0;">
            <div style="font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; color: #111;">${it.title}</div>
            <div style="font-size: 13px; color: #666; margin: 2px 0;">Size: ${it.variant_title}</div>
            <div style="font-weight: 700; font-size: 14px; color: #111; margin-top: 4px;">$${it.price.toFixed(2)}</div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; background: #f0f0f0; border-radius: 20px; padding: 4px 8px;">
            <button type="button" data-cart-action="dec" data-index="${idx}" style="border: none; background: none; font-size: 16px; cursor: pointer; padding: 0 4px; font-weight: bold; color: #333;">−</button>
            <span style="font-size: 13px; font-weight: 600; min-width: 16px; text-align: center;">${it.quantity}</span>
            <button type="button" data-cart-action="inc" data-index="${idx}" style="border: none; background: none; font-size: 16px; cursor: pointer; padding: 0 4px; font-weight: bold; color: #333;">+</button>
          </div>
          <button type="button" data-cart-action="del" data-index="${idx}" title="Remove" style="border: none; background: none; cursor: pointer; color: #999; padding: 6px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
          </button>
        </div>
      `).join('');

      cartItemsComp.innerHTML = `
        <div class="cart-drawer__content" style="padding: 0 24px 24px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 16px;">
            <h2 class="theme-drawer__title h4" style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">YOUR BAG (${count})</h2>
            <span style="font-size: 12px; font-weight: 600; color: #2e7d32; background: #e8f5e9; padding: 4px 8px; border-radius: 12px;">Free Shipping</span>
          </div>
          <div class="cart-drawer__items" style="max-height: calc(100vh - 320px); overflow-y: auto; padding-right: 4px;">
            ${itemsHtml}
          </div>
          <div class="cart-drawer__footer" style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e5e5;">
            <div style="display: flex; justify-content: space-between; font-size: 15px; margin-bottom: 8px;">
              <span style="color: #666;">Estimated Shipping</span>
              <span style="font-weight: 600; color: #2e7d32;">FREE</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: 700; margin-bottom: 16px; color: #111;">
              <span>Total</span>
              <span>$${cart.total_price.toFixed(2)}</span>
            </div>
            <button type="button" id="nikey-checkout-btn" style="width: 100%; background: #000; color: #fff; padding: 16px; border-radius: 30px; font-weight: 700; font-size: 15px; border: none; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; transition: transform 0.15s, opacity 0.15s; display: flex; justify-content: center; align-items: center; gap: 8px;">
              <span>Checkout • $${cart.total_price.toFixed(2)}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <p style="text-align: center; font-size: 12px; color: #888; margin-top: 12px;">30-Day Unconditional Returns & Guarantee</p>
          </div>
        </div>
      `;

      // Bind actions in drawer
      cartItemsComp.querySelectorAll('[data-cart-action]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const action = btn.dataset.cartAction;
          const idx = parseInt(btn.dataset.index, 10);
          if (action === 'inc') updateQuantity(idx, 1);
          else if (action === 'dec') updateQuantity(idx, -1);
          else if (action === 'del') removeItem(idx);
        });
      });

      const checkoutBtn = document.getElementById('nikey-checkout-btn');
      if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
          showCheckoutModal(cart);
        });
      }
    }
  }

  function openCartDrawer() {
    const drawerDialog = document.querySelector('#cart-drawer dialog');
    if (drawerDialog) {
      if (typeof drawerDialog.showModal === 'function' && !drawerDialog.open) {
        drawerDialog.showModal();
      } else {
        drawerDialog.setAttribute('open', '');
      }
    }
  }

  function closeCartDrawer() {
    const drawerDialog = document.querySelector('#cart-drawer dialog');
    if (drawerDialog) {
      if (typeof drawerDialog.close === 'function') {
        drawerDialog.close();
      } else {
        drawerDialog.removeAttribute('open');
      }
    }
  }

  function showCheckoutModal(cart) {
    closeCartDrawer();
    const modal = document.createElement('div');
    modal.id = 'nikey-checkout-modal';
    modal.style.cssText = 'position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); display: flex; justify-content: center; align-items: center; z-index: 99999; padding: 20px;';
    modal.innerHTML = `
      <div style="background: #fff; border-radius: 20px; max-width: 480px; width: 100%; padding: 36px 28px; text-align: center; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); animation: nikeyPop 0.3s cubic-bezier(0.16, 1, 0.3, 1);">
        <div style="width: 64px; height: 64px; background: #e8f5e9; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: #2e7d32;">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <h3 style="font-size: 24px; font-weight: 800; text-transform: uppercase; letter-spacing: -0.5px; margin: 0 0 8px; color: #111;">Order Confirmed!</h3>
        <p style="font-size: 14px; color: #666; margin: 0 0 20px;">Order #NK-${Math.floor(100000 + Math.random() * 900000)} placed successfully.</p>
        <div style="background: #f9f9f9; border-radius: 12px; padding: 16px; margin-bottom: 24px; text-align: left; font-size: 13px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
            <span style="color: #666;">Items:</span>
            <span style="font-weight: 600;">${cart.item_count} pcs</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
            <span style="color: #666;">Total Paid:</span>
            <span style="font-weight: 700; color: #111;">$${cart.total_price.toFixed(2)}</span>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: #666;">Estimated Delivery:</span>
            <span style="font-weight: 600; color: #2e7d32;">2-4 Business Days</span>
          </div>
        </div>
        <button type="button" id="nikey-modal-close-btn" style="width: 100%; background: #000; color: #fff; padding: 14px; border-radius: 30px; font-weight: 700; font-size: 14px; border: none; cursor: pointer; text-transform: uppercase; letter-spacing: 1px;">
          Continue Shopping
        </button>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('nikey-modal-close-btn').addEventListener('click', () => {
      modal.remove();
      clearCart();
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
        clearCart();
      }
    });
  }

  // 4. Intercept Fetch for /cart/... endpoints
  const originalFetch = window.fetch;
  window.fetch = async function(resource, init) {
    const url = typeof resource === 'string' ? resource : (resource && resource.url ? resource.url : '');

    // Intercept cart.js
    if (url.includes('/cart.js') && (!init || !init.method || init.method.toUpperCase() === 'GET')) {
      const cart = getCart();
      const mockShopifyCart = {
        token: 'nikey_token_' + Date.now(),
        note: null,
        attributes: {},
        original_total_price: Math.round(cart.total_price * 100),
        total_price: Math.round(cart.total_price * 100),
        total_discount: 0,
        total_weight: 0,
        item_count: cart.item_count,
        items: cart.items.map(it => ({
          id: it.id,
          product_id: it.product_id,
          title: it.title,
          price: Math.round(it.price * 100),
          quantity: it.quantity,
          image: it.image,
          variant_title: it.variant_title
        })),
        requires_shipping: true,
        currency: 'USD',
        items_subtotal_price: Math.round(cart.total_price * 100)
      };
      return new Response(JSON.stringify(mockShopifyCart), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Intercept cart/add.js
    if (url.includes('/cart/add.js')) {
      let bodyData = {};
      if (init && init.body) {
        try {
          if (typeof init.body === 'string') bodyData = JSON.parse(init.body);
          else if (init.body instanceof FormData) {
            for (let [k, v] of init.body.entries()) bodyData[k] = v;
          }
        } catch (e) {}
      }

      // Find product details
      const idStr = String(bodyData.id || (bodyData.items && bodyData.items[0] && bodyData.items[0].id) || '');
      let prod = null;
      let selectedOption = 'Standard';

      for (let k in CATALOG) {
        const p = CATALOG[k];
        const matchVariant = p.variants.find(v => String(v.id) === idStr);
        if (matchVariant) {
          prod = p;
          selectedOption = matchVariant.title;
          break;
        }
        if (String(p.id) === idStr || p.handle === idStr) {
          prod = p;
          break;
        }
      }

      if (!prod) {
        prod = CATALOG['10893259735345'] || Object.values(CATALOG)[0]; // Fallback to Luka 5
      }

      const newItem = {
        id: bodyData.id || prod.id,
        product_id: prod.id,
        title: prod.title,
        variant_title: selectedOption,
        price: prod.price,
        quantity: Number(bodyData.quantity || 1),
        image: prod.image || './assets/images/asset_008_2d791642cbe6.png'
      };

      addToCart(newItem);

      return new Response(JSON.stringify({
        id: newItem.id,
        quantity: newItem.quantity,
        title: newItem.title,
        price: Math.round(newItem.price * 100),
        variant_title: newItem.variant_title,
        image: newItem.image
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return originalFetch.apply(this, arguments);
  };

  // 5. Initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    // Initial UI Sync
    updateCartUI(getCart());

    // Cart Icon Click Handlers
    document.querySelectorAll('cart-icon, [data-testid="cart-icon"], [href="/cart"]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openCartDrawer();
      });
    });

    // Close Button Handlers
    document.querySelectorAll('.theme-drawer__close-button, [data-action="close"], .cart-drawer__close-button, button[aria-label="Close"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        closeCartDrawer();
      });
    });

    // Dialog Backdrop Click Handler
    const cartDialog = document.querySelector('#cart-drawer dialog');
    if (cartDialog) {
      cartDialog.addEventListener('click', (e) => {
        if (e.target === cartDialog) closeCartDrawer();
      });
    }

    // Navigation Smooth Scrolling
    const NAV_MAP = {
      'home': '#sr-template--27695055274289__scene_rail_redGmm',
      'nike orbit': '#so-template--27695055274289__shoe_orbit_WizENf',
      'hand rail pro': '#sr-template--27695055274289__scene_rail_redGmm',
      'runway': '#shopify-section-template--27695055274289__the_runway_gwqgXR'
    };

    document.querySelectorAll('header a, .header-drawer a').forEach(a => {
      const text = (a.textContent || '').trim().toLowerCase();
      if (NAV_MAP[text]) {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector(NAV_MAP[text]);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else if (text === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          // If in mobile drawer, close drawer
          const mobileDrawer = document.querySelector('.header-drawer dialog');
          if (mobileDrawer && mobileDrawer.close) mobileDrawer.close();
        });
      }
    });

    // Shoe Orbit Size Button Enhancement
    let currentOrbitSize = '42';
    const soSection = document.querySelector('.so-sec');
    if (soSection) {
      const sizeBtns = soSection.querySelectorAll('button');
      sizeBtns.forEach(btn => {
        const txt = btn.textContent.trim();
        if (/^4[0-6]$/.test(txt)) {
          btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active-size'));
            btn.classList.add('active-size');
            currentOrbitSize = txt;
          });
        }
      });
    }

    // Search Dialog Enhancement
    const searchModal = document.querySelector('.search-modal__content');
    const searchInput = document.querySelector('.predictive-search-form input, input[name="q"]');
    const searchResults = document.querySelector('.predictive-search-results, #predictive-search-results');

    if (searchInput && searchModal) {
      searchInput.addEventListener('input', (e) => {
        const q = e.target.value.trim().toLowerCase();
        if (!q) return;

        const matches = Object.values(CATALOG).filter(p => 
          p.title.toLowerCase().includes(q) || p.handle.toLowerCase().includes(q)
        );

        if (searchResults && matches.length > 0) {
          searchResults.innerHTML = `
            <div style="padding: 16px; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;">
              ${matches.map(m => `
                <div style="border: 1px solid #eee; border-radius: 12px; padding: 12px; text-align: center; background: #fafafa;">
                  <img src="${m.image}" alt="${m.title}" style="width: 100%; height: 140px; object-fit: contain; margin-bottom: 8px;">
                  <div style="font-weight: 700; font-size: 14px; text-transform: uppercase;">${m.title}</div>
                  <div style="color: #666; font-size: 13px; margin: 4px 0;">$${m.price.toFixed(2)}</div>
                  <button type="button" class="nikey-quick-add-btn" data-prod-id="${m.id}" style="width: 100%; background: #000; color: #fff; border: none; border-radius: 20px; padding: 8px; font-weight: 600; font-size: 12px; cursor: pointer; text-transform: uppercase; margin-top: 6px;">Add to Bag</button>
                </div>
              `).join('')}
            </div>
          `;

          searchResults.querySelectorAll('.nikey-quick-add-btn').forEach(b => {
            b.addEventListener('click', () => {
              const pid = b.dataset.prodId;
              const prod = CATALOG[pid];
              if (prod) {
                addToCart({
                  id: prod.id,
                  product_id: prod.id,
                  title: prod.title,
                  variant_title: prod.options[0] || 'Standard',
                  price: prod.price,
                  quantity: 1,
                  image: prod.image
                });
                if (searchModal.close) searchModal.close();
              }
            });
          });
        }
      });
    }
  });
})();
