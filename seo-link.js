   <!-- SEO Smart Links -->
  <b:if cond='data:view.isPost'>
  <script type='text/javascript'>
function smartLink(){
    this.keywdHref = new Object();
    this.add = function(keyword, href){
        if(keyword.substr(0,1) != &quot; &quot;){keyword = &quot; &quot; + keyword;}
        this.keywdHref[keyword] =  href;
    }
    this.createAnchor = function(){
        var objs = document.getElementsByTagName(&quot;div&quot;);
        for(var i=0; i&lt;objs.length; i++){
            var obj = objs[i];
            if(obj.className.indexOf(&quot;post-body&quot;)&gt;-1){
                var content = obj.innerHTML;
                for(var keyword in this.keywdHref){
                    var href = this.keywdHref[keyword];
                    var newstr = content.replace(keyword, &quot;&lt;a href=&#39;&quot;+href+&quot;&#39;&gt;&quot;+keyword+&quot;&lt;/a&gt;&quot;, &quot;gi&quot;);
                    obj.innerHTML = newstr;
                    content = newstr;
                }
            }
        }
    }
    this.startScript = function(){
        var onLoad = window.onload;
        window.onload = function(){
            if(onLoad){onLoad();}
            setTimeout(&quot;f.createAnchor()&quot;, 100);
        }
    }
}
</script>
<script type='text/javascript'>
var f = new smartLink();

f.add(&quot;Entikong&quot;, &quot;https://www.borneotribun.com/search/label/Entikong&quot;);
f.add(&quot;Kecamatan Belitang&quot;, &quot;https://www.borneotribun.com/search/label/Belitang&quot;);  
f.add(&quot;Kecamatan Sekadau Hilir&quot;, &quot;https://www.borneotribun.com/search/label/Sekadau Hilir&quot;);    

f.add(&quot;Kabupaten Sanggau&quot;, &quot;https://bit.ly/3fRbmoq&quot;);
f.add(&quot;Kabupaten Sintang&quot;, &quot;https://bit.ly/2PsO2CZ&quot;);
f.add(&quot;Kabupaten Sekadau&quot;, &quot;https://bit.ly/2PFzGPs&quot;);
f.add(&quot;Kabupaten Kapuas Hulu&quot;, &quot;https://bit.ly/3cTqMXm&quot;);
f.add(&quot;Kabupaten Landak&quot;, &quot;https://bit.ly/39KrV1s&quot;);
f.add(&quot;Kabupaten Bengkayang&quot;, &quot;https://bit.ly/39JYyfL&quot;);
f.add(&quot;Kalimantan Barat&quot;, &quot;https://bit.ly/2R0kQ6u&quot;);
f.add(&quot;Kabupaten Kubu Raya&quot;, &quot;https://bit.ly/3wwGz6k&quot;); 
  
f.add(&quot;Mataram&quot;, &quot;https://www.borneotribun.com/search/label/Mataram&quot;);
f.add(&quot;Kabupaten Lombok Utara&quot;, &quot;https://www.borneotribun.com/search/label/Lombok Utara&quot;);
f.add(&quot;Kabupaten Lombok Barat&quot;, &quot;https://www.borneotribun.com/search/label/Lombok Barat&quot;);
f.add(&quot;Kabupaten Lombok Tengah&quot;, &quot;https://www.borneotribun.com/search/label/Lombok Tengah&quot;);
  
f.add(&quot;Polda Kalbar&quot;, &quot;https://www.borneotribun.com/search/label/Polda Kalbar&quot;); 
f.add(&quot;Polres Sekadau&quot;, &quot;https://www.borneotribun.com/search/label/Polres%20Sekadau&quot;);
f.add(&quot;Pemkab Sanggau&quot;, &quot;https://www.borneotribun.com/search/label/Pemkab%20Sanggau&quot;);
f.add(&quot;Pemkab Sekadau&quot;, &quot;https://www.borneotribun.com/search/label/Pemkab%20Sekadau&quot;);
f.add(&quot;Pemkab Sintang&quot;, &quot;https://www.borneotribun.com/search/label/Pemkab%20Sintang&quot;);
f.add(&quot;DPRD Sekadau&quot;, &quot;https://www.borneotribun.com/search/label/DPRD%20Sekadau&quot;);
  
  
f.add(&quot;Kominfo Sanggau&quot;, &quot;https://diskominfo.sanggau.go.id/&quot;);   
f.add(&quot;Kalbaronline&quot;, &quot;https://www.kalbaronline.com/&quot;);   
f.add(&quot;Humas Setkab&quot;, &quot;https://setkab.go.id&quot;); 
f.add(&quot;Liputan6&quot;, &quot;https://www.liputan6.com/&quot;); 
f.add(&quot;SuaraKalbar&quot;, &quot;https://www.suarakalbar.co.id&quot;); 
f.add(&quot;Detik.com&quot;, &quot;https://www.detik.com&quot;); 
f.add(&quot;Antaranews&quot;, &quot;https://www.antaranews.com/&quot;); 
f.add(&quot;VOA Indonesia&quot;, &quot;https://www.voaindonesia.com&quot;);  
f.add(&quot;Amerika Serikat&quot;, &quot;https://www.borneotribun.com/search/label/Amerika&quot;);
f.add(&quot;Donald Trump&quot;, &quot;https://www.borneotribun.com/search/label/Donald Trump&quot;);
f.add(&quot;Joe Biden&quot;, &quot;https://www.borneotribun.com/search/label/Joe Biden&quot;);   

f.add(&quot;banjir&quot;, &quot;https://bit.ly/2PVDwE0&quot;);
f.add(&quot;pencurian&quot;, &quot;https://bit.ly/2PZukhO&quot;);
f.add(&quot;pembunuhan&quot;, &quot;https://bit.ly/3dC3W5R&quot;);
f.add(&quot;kecelakaan&quot;, &quot;https://bit.ly/3wt3HTi&quot;);
f.add(&quot;bunuh diri&quot;, &quot;https://bit.ly/3t5ryXj&quot;);  
f.add(&quot;kebakaran hutan&quot;, &quot;https://www.borneotribun.com/search/label/Kebakaran Hutan&quot;);  
f.add(&quot;gantung diri&quot;, &quot;https://www.borneotribun.com/search/label/Gantung Diri&quot;);    
f.add(&quot;Pasar&quot;, &quot;https://www.borneotribun.com/search/label/Pasar&quot;);
f.add(&quot;penemuan mayat&quot;, &quot;https://www.borneotribun.com/search/label/Penemuan Mayat&quot;);  
f.add(&quot;Sawit&quot;, &quot;https://www.borneotribun.com/search/label/Sawit&quot;);  
f.add(&quot;COVID-19&quot;, &quot;https://bit.ly/31LRYRx&quot;);

  
f.add(&quot;Vaksin AstraZeneca&quot;, &quot;https://bit.ly/3sYT9ta&quot;);  
f.add(&quot;Vaksinasi COVID-19&quot;, &quot;https://bit.ly/3mufSLa&quot;); 
f.add(&quot;Vaksinasi Massal&quot;, &quot;https://bit.ly/2PtAjvJ&quot;);
f.add(&quot;Vaksin COVID-19&quot;, &quot;https://www.borneotribun.com/search/label/Vaksin%20Covid-19&quot;);
f.add(&quot;Pemerkosaan&quot;, &quot;https://www.borneotribun.com/search/label/Pemerkosaan&quot;);
f.add(&quot;Dibawah Umur&quot;, &quot;https://www.borneotribun.com/search/label/Dibawah Umur&quot;); 
f.add(&quot;Anak Dibawah Umur&quot;, &quot;https://www.borneotribun.com/search/label/Dibawah Umur&quot;);  
f.add(&quot;Vaksin Sinovac&quot;, &quot;https://www.borneotribun.com/search/label/Vaksin Covid-19&quot;);  
f.add(&quot;CPNS&quot;, &quot;https://bit.ly/39MUfAB&quot;);  
f.add(&quot;Internet&quot;, &quot;https://bit.ly/3sWyKEM&quot;);
f.add(&quot;5G&quot;, &quot;https://www.borneotribun.com/search/label/5G&quot;);  
f.add(&quot;Samsung&quot;, &quot;https://www.borneotribun.com/search/label/Samsung&quot;);   
f.add(&quot;Mobil Listrik&quot;, &quot;https://bit.ly/3rMAhvS&quot;); 
f.add(&quot;Mobil&quot;, &quot;https://bit.ly/2OoaufX&quot;);   
  
f.add(&quot;Tri Panungko&quot;, &quot;https://bit.ly/3rRk5cR&quot;); 
f.add(&quot;Joni Irwanto&quot;, &quot;https://www.borneotribun.com/search/label/Joni%20Irwanto&quot;);  
f.add(&quot;Jokowi&quot;, &quot;https://bit.ly/3wEQRl8&quot;);
f.add(&quot;Sutarmidji&quot;, &quot;https://bit.ly/39IrWDc&quot;);
f.add(&quot;Paolus Hadi&quot;, &quot;https://bit.ly/3cQ6Y7m&quot;);
f.add(&quot;Yohanes Ontot&quot;, &quot;https://bit.ly/3mmrD65&quot;);
f.add(&quot;Yodi Setiawan&quot;, &quot;https://www.borneotribun.com/search/label/Yodi Setiawan&quot;);
f.add(&quot;Zainal&quot;, &quot;https://www.borneotribun.com/search/label/Zainal&quot;);
f.add(&quot;Aron&quot;, &quot;https://www.borneotribun.com/search/label/Aron&quot;);  
f.add(&quot;Subandrio&quot;, &quot;https://www.borneotribun.com/search/label/Subandrio&quot;);  
f.add(&quot;Rupinus&quot;, &quot;https://www.borneotribun.com/search/label/Rupinus&quot;);  
f.add(&quot;Aloysius&quot;, &quot;https://www.borneotribun.com/search/label/Aloysius&quot;);
f.add(&quot;Golkar&quot;, &quot;https://www.borneotribun.com/search/label/Partai Golkar&quot;);
f.add(&quot;PDI Perjuangan&quot;, &quot;https://www.borneotribun.com/search/label/Partai PDIP&quot;); 
f.add(&quot;Demokrat&quot;, &quot;https://www.borneotribun.com/search/label/Partai Demokrat&quot;);
f.add(&quot;Nasdem&quot;, &quot;https://www.borneotribun.com/search/label/Partai Nasdem&quot;); 
f.add(&quot;WHO&quot;, &quot;https://bit.ly/3rVgLgG&quot;);  
f.add(&quot;AHY&quot;, &quot;https://www.borneotribun.com/search/label/AHY&quot;); 
f.add(&quot;Moeldoko&quot;, &quot;https://www.borneotribun.com/search/label/Moeldoko&quot;); 
f.add(&quot;Presiden Jokowi&quot;, &quot;https://www.borneotribun.com/search/label/Jokowi&quot;);   
f.add(&quot;Sujiwo&quot;, &quot;https://www.borneotribun.com/search/label/Sujiwo&quot;); 
 f.add(&quot;FPI&quot;, &quot;https://bit.ly/31LUA23&quot;); 
f.add(&quot;Mahfud MD&quot;, &quot;https://www.borneotribun.com/search/label/Mahfud MD&quot;);  
f.add(&quot;HAM&quot;, &quot;https://bit.ly/3sSL74F&quot;); 
f.add(&quot;POM&quot;, &quot;https://www.borneotribun.com/search/label/POM&quot;);     
f.add(&quot;Melayu&quot;, &quot;https://www.borneotribun.com/search/label/Melayu&quot;); 
f.add(&quot;Dayak&quot;, &quot;https://www.borneotribun.com/search/label/Dayak&quot;); 
f.add(&quot;Masker&quot;, &quot;https://bit.ly/3moeREs&quot;);  
f.add(&quot;protokol kesehatan&quot;, &quot;https://bit.ly/3mn515p&quot;);
f.add(&quot;PMI&quot;, &quot;https://www.borneotribun.com/search/label/PMI&quot;);  
f.add(&quot;Donor Darah&quot;, &quot;https://www.borneotribun.com/search/label/Donor Darah&quot;);    
f.add(&quot;Film&quot;, &quot;https://www.borneotribun.com/search/label/Film&quot;); 
f.add(&quot;Ma&#8217;ruf Amin&quot;, &quot;https://www.borneotribun.com/search/label/Ma&#8217;ruf Amin&quot;);   
f.add(&quot;Islam&quot;, &quot;https://www.borneotribun.com/search/label/Islam&quot;);
f.add(&quot;Kreatif&quot;, &quot;https://www.borneotribun.com/search/label/Kreatif&quot;);
f.add(&quot;Sandiaga Uno&quot;, &quot;https://www.borneotribun.com/search/label/Sandiaga Uno&quot;);  
f.add(&quot;Wisata&quot;, &quot;https://www.borneotribun.com/search/label/Wisata&quot;);
f.add(&quot;UMKM&quot;, &quot;https://bit.ly/31NG0a7&quot;);
f.add(&quot;KONI&quot;, &quot;https://bit.ly/3cRA4U7&quot;);  
f.add(&quot;PSSI&quot;, &quot;https://bit.ly/3uqnVeM&quot;);
f.add(&quot;Wahyudi Hidayat&quot;, &quot;https://www.borneotribun.com/search/label/Wahyudi Hidayat&quot;);
f.add(&quot;Kamala Harris&quot;, &quot;https://www.borneotribun.com/search/label/Kamala Harris&quot;);  

f.startScript();
</script>
 </b:if> 