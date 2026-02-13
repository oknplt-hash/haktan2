
// ============================================================
// PRODUCTS MODULE
// ============================================================
import { CATEGORY_NAMES } from './utils.js';

const DEFAULT_PRODUCTS = [
    // ---- Kuruyemiş ----
    { id: 1, name: "Lüks Antep Fıstığı", category: "kuruyemis", price: 850, oldPrice: 950, weight: "500g", rating: 4.8, reviews: 124, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnZQnXvUqHtBPbKLTHR_cB97TxWBN3KJ2qNzHxHqGCFiB5p5nqeeEuWMlJzJw2_k0qJBjASMR80mKpI-7osDDlC6tN-ZO1Gkxmx0cGrv3_x5tVuBNpKzCWG0oeGFYAc2XWzlUQ5BzC-b2ZHQfQfXLqV3gU2WlKS42F_8iLaW8LNH5z-lHTnXcH__P_UlcJSKwocpTmT8u_2yJJ5kh9k3xT-7xDSd4d9N_zl5BKDQ_0fIKZxVtqZZOHh5KJsxb8CcRQzCDRPkqno", description: "Gaziantep'in en kaliteli fıstıkları, günlük taze kavrulmuş." },
    { id: 2, name: "Saray Lüks Karışık Çerez", category: "kuruyemis", price: 420, oldPrice: 490, weight: "500g", rating: 4.5, reviews: 42, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc3irhx7nvPaeQsyLzFVwZQGlDzClUU3doMMTp2E6c152FZpKH_QtA_SNflYtfVwL9-HcGG9mjUjbyg-VP5sstgn2qLhvNkcEJ6xdPJedpMQto2OTy-fUavdd0a02mkdynmwL_vANJbIk8kB79yhDPZn4wdtmdteRl9V5zDJ5hZNzp3MzGXdRjp-zuO_kB89Gz0DqE53YWyZTJY2aM9Bes6CR0KYipsw5SD-Zdc52Hj3tuBfpA6GnEfK1qt-5vYmndf6JjfjEJPVg", description: "Özel karışım lüks çerez, her lokmada farklı tat." },
    { id: 3, name: "Kavrulmuş Kaju", category: "kuruyemis", price: 520, oldPrice: null, weight: "250g", rating: 4.7, reviews: 38, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeNPGn5ZKpT5u0ZMpP2iA8-sKnN_wT3qr1Rx7Vg01dFABezIlXgWmlI9EmM1UJGUclszCSP4YWPXWcKEWo59nAg4wt2uwiHt3alE4PtcCu0isSobI54dgh3Uw3r3Ugba_WYp6zfm1kwi1kSJYWJtDOAclFpoXSFBCGmepTM4qbBjZ93uljAG5W7cbNhwryg3-GQ59iAr3KVZrKb3D8mHJw2-PaorfHr5mvI2w_tR2QrJUzqUTMLmkvAMgFFY6HAzPe4Mbc005ED7M", description: "Tuzlu kavrulmuş kaju fıstığı, atıştırmalık." },
    { id: 4, name: "Tuzlu Yer Fıstığı", category: "kuruyemis", price: 120, oldPrice: 150, weight: "500g", rating: 4.3, reviews: 89, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH8VArVN6n-tDprj6IDSnMMJenTyMsneYlONbSgyLLQtLVqg2Zu1iToepDwvvJ-HvRMC0ZRgNQyvwduy48jJY9jFYknpURMheNX8BL63p1TSNsw7CvC4aDIBB04Y2zmmwNhjT9rSaBtbx2A2-VOO7gDHyJ8Pp4Ti4OrPfhRTQhnUATQXg7mnAKxhDz6_G2dzXLQJkO7QgSomHSgKs5KWuLreEVMmx1WJ8vRm7q-xa8PT1-rtgRUkI8IpJbvWgYpN9t9vTacy5xZZI", description: "Klasik tuzlu kavrulmuş yer fıstığı." },
    { id: 5, name: "Brezilya Cevizi", category: "kuruyemis", price: 680, oldPrice: null, weight: "250g", rating: 4.6, reviews: 17, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQJC22B122cg_g0zbJ1XGhfxg0JsvL3V9ksOAUBP-4e2pjSbwpBqV7vtayhkVTFco4-FSlsinxkCuzjShevJs3-FHc5MW1abKoPFLNhkBc_Zbz6sOOIQJM7HYygoiaoUGfeGeU7-LnMmD2hd8mvgbWTa62Q7TS5ese8KUDLyJYvY6jwIjg6n9HKAI4p_vyEPoTMQOpvMFVKNe_4G5VXBTMrt3ZJURgGGAflv5O89IW8JUBdeloUXWbMd4B9ytdlc251FAfXvx7HzM", description: "İthal Brezilya cevizi, zengin mineral kaynağı." },
    { id: 6, name: "Bergama Tulum Peyniri", category: "sarkuteri", price: 320, oldPrice: null, weight: "500g", rating: 4.9, reviews: 56, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH8VArVN6n-tDprj6IDSnMMJenTyMsneYlONbSgyLLQtLVqg2Zu1iToepDwvvJ-HvRMC0ZRgNQyvwduy48jJY9jFYknpURMheNX8BL63p1TSNsw7CvC4aDIBB04Y2zmmwNhjT9rSaBtbx2A2-VOO7gDHyJ8Pp4Ti4OrPfhRTQhnUATQXg7mnAKxhDz6_G2dzXLQJkO7QgSomHSgKs5KWuLreEVMmx1WJ8vRm7q-xa8PT1-rtgRUkI8IpJbvWgYpN9t9vTacy5xZZI", description: "Ege'nin meşhur tulum peyniri, olgunlaştırılmış." },
    { id: 7, name: "Pastırma (Dana)", category: "sarkuteri", price: 450, oldPrice: 520, weight: "300g", rating: 4.7, reviews: 33, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6m1tdDjAHhOL1Tpr6wvGwFXSpNywWaPFtFgTu98gE4SpEEMVzMx2Xqm0anmiApLIJeSySQJmP33MZvrIklseHNuz4uekhy6DX2Dmb4MKx5WFRZkvWizD-cy5da1ZkHK_J6p1mJaBMxxzQ9CtSRRVLV0oWW3UyDxeDi_l8lV-4QpbO58ULjtNqVlvaI53q4etqgciE-F6SP562DPXy_rMKOigbHM3eEJRmr_M9M_MW6BwLr3owf-nhmYDXXGCBHSK3RVHJMOR_i6I", description: "Kayseri usulü dana pastırma, el yapımı çemen." },
    { id: 8, name: "Sucuk (Kangal)", category: "sarkuteri", price: 280, oldPrice: null, weight: "500g", rating: 4.5, reviews: 67, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt-YxHF40-Aeqw-mNnpZ3nobA0ab7lxLlX5gBUoWV009o5SES1l7ikcy4JkekuzKWZ7HAsOYnUDaP5U2KFwzijMzZtgWQLoiesFhLk3EdL4Onw8bflfD72Xo5NG8iJXvlWt_wQBuD8OyaSvaB3-7xX3CgNm4dgDT3r_Amct86Fkq7VzuUpJHXAaR_1NfCPjruxkqRJLkcxy7d32VftlFVZPv_rkD9w77mo6tU3XxlzojauHoNaz6rnHNdAkxDBCIOHsjeEGPCjI7U", description: "Geleneksel kangal sucuk, %100 dana eti." },
    { id: 9, name: "Kaşar Peyniri (Eski)", category: "sarkuteri", price: 380, oldPrice: null, weight: "500g", rating: 4.6, reviews: 41, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnZQnXvUqHtBPbKLTHR_cB97TxWBN3KJ2qNzHxHqGCFiB5p5nqeeEuWMlJzJw2_k0qJBjASMR80mKpI-7osDDlC6tN-ZO1Gkxmx0cGrv3_x5tVuBNpKzCWG0oeGFYAc2XWzlUQ5BzC-b2ZHQfQfXLqV3gU2WlKS42F_8iLaW8LNH5z-lHTnXcH__P_UlcJSKwocpTmT8u_2yJJ5kh9k3xT-7xDSd4d9N_zl5BKDQ_0fIKZxVtqZZOHh5KJsxb8CcRQzCDRPkqno", description: "18 ay olgunlaştırılmış eski kaşar peyniri." },
    { id: 10, name: "Zeytin (Gemlik Siyah)", category: "sarkuteri", price: 160, oldPrice: 190, weight: "1kg", rating: 4.8, reviews: 72, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc3irhx7nvPaeQsyLzFVwZQGlDzClUU3doMMTp2E6c152FZpKH_QtA_SNflYtfVwL9-HcGG9mjUjbyg-VP5sstgn2qLhvNkcEJ6xdPJedpMQto2OTy-fUavdd0a02mkdynmwL_vANJbIk8kB79yhDPZn4wdtmdteRl9V5zDJ5hZNzp3MzGXdRjp-zuO_kB89Gz0DqE53YWyZTJY2aM9Bes6CR0KYipsw5SD-Zdc52Hj3tuBfpA6GnEfK1qt-5vYmndf6JjfjEJPVg", description: "Gemlik'in meşhur siyah zeytini, doğal salamura." },
    { id: 11, name: "Kekik (Taze Dağ)", category: "aktar", price: 45, oldPrice: null, weight: "100g", rating: 4.4, reviews: 28, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQJC22B122cg_g0zbJ1XGhfxg0JsvL3V9ksOAUBP-4e2pjSbwpBqV7vtayhkVTFco4-FSlsinxkCuzjShevJs3-FHc5MW1abKoPFLNhkBc_Zbz6sOOIQJM7HYygoiaoUGfeGeU7-LnMmD2hd8mvgbWTa62Q7TS5ese8KUDLyJYvY6jwIjg6n9HKAI4p_vyEPoTMQOpvMFVKNe_4G5VXBTMrt3ZJURgGGAflv5O89IW8JUBdeloUXWbMd4B9ytdlc251FAfXvx7HzM", description: "Ege dağlarından toplanan doğal kekik." },
    { id: 12, name: "Zerdeçal (Toz)", category: "aktar", price: 65, oldPrice: null, weight: "200g", rating: 4.3, reviews: 19, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6m1tdDjAHhOL1Tpr6wvGwFXSpNywWaPFtFgTu98gE4SpEEMVzMx2Xqm0anmiApLIJeSySQJmP33MZvrIklseHNuz4uekhy6DX2Dmb4MKx5WFRZkvWizD-cy5da1ZkHK_J6p1mJaBMxxzQ9CtSRRVLV0oWW3UyDxeDi_l8lV-4QpbO58ULjtNqVlvaI53q4etqgciE-F6SP562DPXy_rMKOigbHM3eEJRmr_M9M_MW6BwLr3owf-nhmYDXXGCBHSK3RVHJMOR_i6I", description: "Saf zerdeçal tozu, doğal renklendirici ve baharat." },
    { id: 13, name: "Ihlamur", category: "aktar", price: 90, oldPrice: 110, weight: "100g", rating: 4.7, reviews: 45, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt-YxHF40-Aeqw-mNnpZ3nobA0ab7lxLlX5gBUoWV009o5SES1l7ikcy4JkekuzKWZ7HAsOYnUDaP5U2KFwzijMzZtgWQLoiesFhLk3EdL4Onw8bflfD72Xo5NG8iJXvlWt_wQBuD8OyaSvaB3-7xX3CgNm4dgDT3r_Amct86Fkq7VzuUpJHXAaR_1NfCPjruxkqRJLkcxy7d32VftlFVZPv_rkD9w77mo6tU3XxlzojauHoNaz6rnHNdAkxDBCIOHsjeEGPCjI7U", description: "Bursa ıhlamuru, kış çaylarının vazgeçilmezi." },
    { id: 14, name: "Kimyon (Tane)", category: "aktar", price: 55, oldPrice: null, weight: "200g", rating: 4.2, reviews: 14, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnZQnXvUqHtBPbKLTHR_cB97TxWBN3KJ2qNzHxHqGCFiB5p5nqeeEuWMlJzJw2_k0qJBjASMR80mKpI-7osDDlC6tN-ZO1Gkxmx0cGrv3_x5tVuBNpKzCWG0oeGFYAc2XWzlUQ5BzC-b2ZHQfQfXLqV3gU2WlKS42F_8iLaW8LNH5z-lHTnXcH__P_UlcJSKwocpTmT8u_2yJJ5kh9k3xT-7xDSd4d9N_zl5BKDQ_0fIKZxVtqZZOHh5KJsxb8CcRQzCDRPkqno", description: "Tane kimyon, et yemeklerinin olmazsa olmazı." },
    { id: 15, name: "Adaçayı", category: "aktar", price: 50, oldPrice: null, weight: "100g", rating: 4.5, reviews: 31, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeNPGn5ZKpT5u0ZMpP2iA8-sKnN_wT3qr1Rx7Vg01dFABezIlXgWmlI9EmM1UJGUclszCSP4YWPXWcKEWo59nAg4wt2uwiHt3alE4PtcCu0isSobI54dgh3Uw3r3Ugba_WYp6zfm1kwi1kSJYWJtDOAclFpoXSFBCGmepTM4qbBjZ93uljAG5W7cbNhwryg3-GQ59iAr3KVZrKb3D8mHJw2-PaorfHr5mvI2w_tR2QrJUzqUTMLmkvAMgFFY6HAzPe4Mbc005ED7M", description: "Toroslardan doğal adaçayı." },
    { id: 16, name: "Kırmızı Mercimek", category: "bakliyat", price: 60, oldPrice: null, weight: "1kg", rating: 4.6, reviews: 53, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6m1tdDjAHhOL1Tpr6wvGwFXSpNywWaPFtFgTu98gE4SpEEMVzMx2Xqm0anmiApLIJeSySQJmP33MZvrIklseHNuz4uekhy6DX2Dmb4MKx5WFRZkvWizD-cy5da1ZkHK_J6p1mJaBMxxzQ9CtSRRVLV0oWW3UyDxeDi_l8lV-4QpbO58ULjtNqVlvaI53q4etqgciE-F6SP562DPXy_rMKOigbHM3eEJRmr_M9M_MW6BwLr3owf-nhmYDXXGCBHSK3RVHJMOR_i6I", description: "Güneydoğu'nun süzme kırmızı mercimeği." },
    { id: 17, name: "Nohut (Koçbaşı)", category: "bakliyat", price: 55, oldPrice: null, weight: "1kg", rating: 4.4, reviews: 37, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnZQnXvUqHtBPbKLTHR_cB97TxWBN3KJ2qNzHxHqGCFiB5p5nqeeEuWMlJzJw2_k0qJBjASMR80mKpI-7osDDlC6tN-ZO1Gkxmx0cGrv3_x5tVuBNpKzCWG0oeGFYAc2XWzlUQ5BzC-b2ZHQfQfXLqV3gU2WlKS42F_8iLaW8LNH5z-lHTnXcH__P_UlcJSKwocpTmT8u_2yJJ5kh9k3xT-7xDSd4d9N_zl5BKDQ_0fIKZxVtqZZOHh5KJsxb8CcRQzCDRPkqno", description: "İri taneli koçbaşı nohut." },
    { id: 18, name: "Yeşil Mercimek", category: "bakliyat", price: 65, oldPrice: null, weight: "1kg", rating: 4.5, reviews: 22, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc3irhx7nvPaeQsyLzFVwZQGlDzClUU3doMMTp2E6c152FZpKH_QtA_SNflYtfVwL9-HcGG9mjUjbyg-VP5sstgn2qLhvNkcEJ6xdPJedpMQto2OTy-fUavdd0a02mkdynmwL_vANJbIk8kB79yhDPZn4wdtmdteRl9V5zDJ5hZNzp3MzGXdRjp-zuO_kB89Gz0DqE53YWyZTJY2aM9Bes6CR0KYipsw5SD-Zdc52Hj3tuBfpA6GnEfK1qt-5vYmndf6JjfjEJPVg", description: "Yerli üretim yeşil mercimek." },
    { id: 19, name: "Kuru Fasulye (Dermason)", category: "bakliyat", price: 70, oldPrice: 85, weight: "1kg", rating: 4.7, reviews: 48, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeNPGn5ZKpT5u0ZMpP2iA8-sKnN_wT3qr1Rx7Vg01dFABezIlXgWmlI9EmM1UJGUclszCSP4YWPXWcKEWo59nAg4wt2uwiHt3alE4PtcCu0isSobI54dgh3Uw3r3Ugba_WYp6zfm1kwi1kSJYWJtDOAclFpoXSFBCGmepTM4qbBjZ93uljAG5W7cbNhwryg3-GQ59iAr3KVZrKb3D8mHJw2-PaorfHr5mvI2w_tR2QrJUzqUTMLmkvAMgFFY6HAzPe4Mbc005ED7M", description: "İspir dermason fasulye, pişmesi kolay." },
    { id: 20, name: "Bulgur (İnce)", category: "bakliyat", price: 40, oldPrice: null, weight: "1kg", rating: 4.3, reviews: 29, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH8VArVN6n-tDprj6IDSnMMJenTyMsneYlONbSgyLLQtLVqg2Zu1iToepDwvvJ-HvRMC0ZRgNQyvwduy48jJY9jFYknpURMheNX8BL63p1TSNsw7CvC4aDIBB04Y2zmmwNhjT9rSaBtbx2A2-VOO7gDHyJ8Pp4Ti4OrPfhRTQhnUATQXg7mnAKxhDz6_G2dzXLQJkO7QgSomHSgKs5KWuLreEVMmx1WJ8vRm7q-xa8PT1-rtgRUkI8IpJbvWgYpN9t9vTacy5xZZI", description: "Gaziantep ince bulgur." },
    { id: 21, name: "Dut Pestili", category: "pestil-kome", price: 180, oldPrice: null, weight: "500g", rating: 4.8, reviews: 61, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt-YxHF40-Aeqw-mNnpZ3nobA0ab7lxLlX5gBUoWV009o5SES1l7ikcy4JkekuzKWZ7HAsOYnUDaP5U2KFwzijMzZtgWQLoiesFhLk3EdL4Onw8bflfD72Xo5NG8iJXvlWt_wQBuD8OyaSvaB3-7xX3CgNm4dgDT3r_Amct86Fkq7VzuUpJHXAaR_1NfCPjruxkqRJLkcxy7d32VftlFVZPv_rkD9w77mo6tU3XxlzojauHoNaz6rnHNdAkxDBCIOHsjeEGPCjI7U", description: "Gümüşhane dut pestili, doğal kurutma." },
    { id: 22, name: "Cevizli Köme", category: "pestil-kome", price: 220, oldPrice: 260, weight: "500g", rating: 4.9, reviews: 78, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6m1tdDjAHhOL1Tpr6wvGwFXSpNywWaPFtFgTu98gE4SpEEMVzMx2Xqm0anmiApLIJeSySQJmP33MZvrIklseHNuz4uekhy6DX2Dmb4MKx5WFRZkvWizD-cy5da1ZkHK_J6p1mJaBMxxzQ9CtSRRVLV0oWW3UyDxeDi_l8lV-4QpbO58ULjtNqVlvaI53q4etqgciE-F6SP562DPXy_rMKOigbHM3eEJRmr_M9M_MW6BwLr3owf-nhmYDXXGCBHSK3RVHJMOR_i6I", description: "El yapımı cevizli köme, geleneksel tarif." },
    { id: 23, name: "Üzüm Pestili", category: "pestil-kome", price: 150, oldPrice: null, weight: "500g", rating: 4.6, reviews: 34, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnZQnXvUqHtBPbKLTHR_cB97TxWBN3KJ2qNzHxHqGCFiB5p5nqeeEuWMlJzJw2_k0qJBjASMR80mKpI-7osDDlC6tN-ZO1Gkxmx0cGrv3_x5tVuBNpKzCWG0oeGFYAc2XWzlUQ5BzC-b2ZHQfQfXLqV3gU2WlKS42F_8iLaW8LNH5z-lHTnXcH__P_UlcJSKwocpTmT8u_2yJJ5kh9k3xT-7xDSd4d9N_zl5BKDQ_0fIKZxVtqZZOHh5KJsxb8CcRQzCDRPkqno", description: "Doğal üzüm pestili, şekersiz." },
    { id: 24, name: "Fıstıklı Köme", category: "pestil-kome", price: 350, oldPrice: null, weight: "500g", rating: 4.8, reviews: 25, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeNPGn5ZKpT5u0ZMpP2iA8-sKnN_wT3qr1Rx7Vg01dFABezIlXgWmlI9EmM1UJGUclszCSP4YWPXWcKEWo59nAg4wt2uwiHt3alE4PtcCu0isSobI54dgh3Uw3r3Ugba_WYp6zfm1kwi1kSJYWJtDOAclFpoXSFBCGmepTM4qbBjZ93uljAG5W7cbNhwryg3-GQ59iAr3KVZrKb3D8mHJw2-PaorfHr5mvI2w_tR2QrJUzqUTMLmkvAMgFFY6HAzPe4Mbc005ED7M", description: "Antep fıstıklı köme, premium kalite." },
    { id: 25, name: "Karışık Pestil Paketi", category: "pestil-kome", price: 280, oldPrice: 320, weight: "750g", rating: 4.7, reviews: 43, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc3irhx7nvPaeQsyLzFVwZQGlDzClUU3doMMTp2E6c152FZpKH_QtA_SNflYtfVwL9-HcGG9mjUjbyg-VP5sstgn2qLhvNkcEJ6xdPJedpMQto2OTy-fUavdd0a02mkdynmwL_vANJbIk8kB79yhDPZn4wdtmdteRl9V5zDJ5hZNzp3MzGXdRjp-zuO_kB89Gz0DqE53YWyZTJY2aM9Bes6CR0KYipsw5SD-Zdc52Hj3tuBfpA6GnEfK1qt-5vYmndf6JjfjEJPVg", description: "Dut, üzüm ve kayısı pestili karışık paket." },
    { id: 26, name: "Doğal Dağ İnciri", category: "yoresel", price: 380, oldPrice: null, weight: "1kg", rating: 4.0, reviews: 15, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt-YxHF40-Aeqw-mNnpZ3nobA0ab7lxLlX5gBUoWV009o5SES1l7ikcy4JkekuzKWZ7HAsOYnUDaP5U2KFwzijMzZtgWQLoiesFhLk3EdL4Onw8bflfD72Xo5NG8iJXvlWt_wQBuD8OyaSvaB3-7xX3CgNm4dgDT3r_Amct86Fkq7VzuUpJHXAaR_1NfCPjruxkqRJLkcxy7d32VftlFVZPv_rkD9w77mo6tU3XxlzojauHoNaz6rnHNdAkxDBCIOHsjeEGPCjI7U", description: "Aydın kuru inciri, doğal kurutma." },
    { id: 27, name: "Kayısı Kurusu (Malatya)", category: "yoresel", price: 250, oldPrice: 290, weight: "500g", rating: 4.9, reviews: 88, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH8VArVN6n-tDprj6IDSnMMJenTyMsneYlONbSgyLLQtLVqg2Zu1iToepDwvvJ-HvRMC0ZRgNQyvwduy48jJY9jFYknpURMheNX8BL63p1TSNsw7CvC4aDIBB04Y2zmmwNhjT9rSaBtbx2A2-VOO7gDHyJ8Pp4Ti4OrPfhRTQhnUATQXg7mnAKxhDz6_G2dzXLQJkO7QgSomHSgKs5KWuLreEVMmx1WJ8vRm7q-xa8PT1-rtgRUkI8IpJbvWgYpN9t9vTacy5xZZI", description: "Malatya'nın dünyaca ünlü kayısı kurusu." },
    { id: 28, name: "Bal (Süzme Çiçek)", category: "yoresel", price: 320, oldPrice: null, weight: "850g", rating: 4.8, reviews: 52, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6m1tdDjAHhOL1Tpr6wvGwFXSpNywWaPFtFgTu98gE4SpEEMVzMx2Xqm0anmiApLIJeSySQJmP33MZvrIklseHNuz4uekhy6DX2Dmb4MKx5WFRZkvWizD-cy5da1ZkHK_J6p1mJaBMxxzQ9CtSRRVLV0oWW3UyDxeDi_l8lV-4QpbO58ULjtNqVlvaI53q4etqgciE-F6SP562DPXy_rMKOigbHM3eEJRmr_M9M_MW6BwLr3owf-nhmYDXXGCBHSK3RVHJMOR_i6I", description: "Muğla süzme çiçek balı, %100 doğal." },
    { id: 29, name: "Pekmez (Üzüm)", category: "yoresel", price: 120, oldPrice: null, weight: "700g", rating: 4.4, reviews: 36, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnZQnXvUqHtBPbKLTHR_cB97TxWBN3KJ2qNzHxHqGCFiB5p5nqeeEuWMlJzJw2_k0qJBjASMR80mKpI-7osDDlC6tN-ZO1Gkxmx0cGrv3_x5tVuBNpKzCWG0oeGFYAc2XWzlUQ5BzC-b2ZHQfQfXLqV3gU2WlKS42F_8iLaW8LNH5z-lHTnXcH__P_UlcJSKwocpTmT8u_2yJJ5kh9k3xT-7xDSd4d9N_zl5BKDQ_0fIKZxVtqZZOHh5KJsxb8CcRQzCDRPkqno", description: "Doğal üzüm pekmezi, katkısız." },
    { id: 30, name: "Tahin", category: "yoresel", price: 95, oldPrice: null, weight: "500g", rating: 4.5, reviews: 27, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeNPGn5ZKpT5u0ZMpP2iA8-sKnN_wT3qr1Rx7Vg01dFABezIlXgWmlI9EmM1UJGUclszCSP4YWPXWcKEWo59nAg4wt2uwiHt3alE4PtcCu0isSobI54dgh3Uw3r3Ugba_WYp6zfm1kwi1kSJYWJtDOAclFpoXSFBCGmepTM4qbBjZ93uljAG5W7cbNhwryg3-GQ59iAr3KVZrKb3D8mHJw2-PaorfHr5mvI2w_tR2QrJUzqUTMLmkvAMgFFY6HAzPe4Mbc005ED7M", description: "Taş değirmende çekilmiş susam tahini." },
];

export function seedProducts() {
    const stored = localStorage.getItem("haktan_products");
    if (!stored || JSON.parse(stored).length === 0) {
        localStorage.setItem("haktan_products", JSON.stringify(DEFAULT_PRODUCTS));
    }
}

export function getProducts() {
    return JSON.parse(localStorage.getItem("haktan_products")) || [];
}
export function setProducts(products) {
    localStorage.setItem("haktan_products", JSON.stringify(products));
}
export function getProduct(id) {
    return getProducts().find((p) => p.id === Number(id));
}
export function getProductsByCategory(cat) {
    if (!cat) return getProducts();
    return getProducts().filter((p) => p.category === cat);
}
export function searchProducts(query) {
    const q = query.toLowerCase();
    return getProducts().filter(
        (p) =>
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            (CATEGORY_NAMES[p.category] || "").toLowerCase().includes(q)
    );
}
export function addProduct(product) {
    const products = getProducts();
    product.id = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    products.push(product);
    setProducts(products);
    return product;
}
export function updateProduct(id, updates) {
    const products = getProducts();
    const idx = products.findIndex((p) => p.id === Number(id));
    if (idx !== -1) {
        products[idx] = { ...products[idx], ...updates, id: Number(id) };
        setProducts(products);
        return products[idx];
    }
    return null;
}
export function deleteProduct(id) {
    const products = getProducts().filter((p) => p.id !== Number(id));
    setProducts(products);
}
export function getNextProductId() {
    const products = getProducts();
    return products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
}
export function getBestSellers(limit = 8) {
    return getProducts()
        .sort((a, b) => {
            if (b.reviews !== a.reviews) return b.reviews - a.reviews;
            return b.rating - a.rating;
        })
        .slice(0, limit);
}
