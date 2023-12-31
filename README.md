# **Özel Stack İşlemleri**

## Stack sınıfının çalışması

**T** tip parametresi stack'te saklanacak elemanların veri tipini temsil eder.
**'items'** stack içindeki elemanları tutar.
- **constructor** metodu, **Stack** sınıfının bir örneği oluşturulduğunda çağrılır ve **items** dizisini boş bir diziyle başlatır.
- **push** metodu, stack'e yeni bir eleman eklemek için kullanılır.
- **pop** metodu, stack'in en üstündeki elemanı çıkarır.
- **peek** metodu, stack'in en üstündeki elemanı döndürür.
- **isEmpty** metodu, stack'in boş olup olmadığını kontrol eder.

## isValidParantheses fonksiyonunun çalışması

Bu fonksiyon, verilen bir girdi stringinin içindeki parantezlerin düzgün bir şekilde eşleşip eşleşmediğini kontrol eder.

- **stack** değişkeni, parantezlerin geçici olarak saklandığı veri yapısını temsil eder.
- **openingBrackets** ve **closingBrackets** değişkenleri, açma ve kapama parantezlerini içerir.
- **for** döngüsü ile girilen stringteki karakterleri ayırıp her bir karakter için şu işlemleri gerçekleştirir:

    * **char** değişkeni açma parantezi ise, **push** yöntemi ile stack'e eklenir.
    * **char** değişkeni kapama parantezi ise, stack'teki en son açma parantezini **pop** ile çıkarır ve **lastOpeningBracket** değişkenine atar.
    
        - **lastOpeningBracket** değeri undefined ise veya açma kapama parantezlerinin indeksleri eşleşmiyorsa, fonksiyon **false** döner
        
- Döngü tamamlandıktan sonra **isEmpty** metodu ile stack'in boş olup olmadığı kontrol edilir. Eğer stack boş ise **true** değilse **false** döner.

## Konsol çıktısı

![](https://i.hizliresim.com/lvhxlrs.jpg)