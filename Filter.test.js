import * as Filter from './Filter';

/* jasmine or jest specs for services go here */
describe('Filter', function() {

    describe('capitalize',function(){
        it('Testing Check single word for capitalize',function(){
            expect(Filter.capitalize("test")).toEqual("Test");
        });
        it('Testing Check for capitalize on double words',function(){
            expect(Filter.capitalize("test test")).toEqual("Test Test");
        });
        it('Testing Check for capitalize a phrase',function(){
            expect(Filter.capitalize("test hi test")).toEqual("Test Hi Test");
        });
        it('Testing Check single word with special latin letters for capitalize',function(){
            expect(Filter.capitalize("mAçÃ")).toEqual("Maçã");
        });
    });
    
    describe('lower',function(){
        it('Testing single word with lower and uppercase to entire lowercase',function(){
            expect(Filter.lower("TeStE")).toEqual("teste");
        });
        it('Testing word in uppercase to lowercase',function(){
            expect(Filter.lower("TESTE")).toEqual("teste");
        });
        it('Testing word with special latin letters in uppercase to lowercase',function(){
            expect(Filter.lower("MaÇÃ")).toEqual("maçã");
        });
    });
        
    describe('upper',function(){
        it('Testing single word with lower and uppercase to entire uppercase',function(){
            expect(Filter.upper("TeStE")).toEqual("TESTE");
        });
        it('Testing word in lowercase to uppercase',function(){
            expect(Filter.upper("teste")).toEqual("TESTE");
        });
        it('Check single word with special latin letters for upper',function(){
            expect(Filter.upper("mAçã")).toEqual("MAÇÃ");
        });
    });
    
    describe('camelCase2SnakeCase',function(){
        it('Testing word Id',function(){
            expect(Filter.camelCase2SnakeCase("Id")).toEqual("id");
        });
        it('Testing word id',function(){
            expect(Filter.camelCase2SnakeCase("id")).toEqual("id");
        });
        it('Testing word ProfessionalAddress',function(){
            expect(Filter.camelCase2SnakeCase("ProfessionalAddress")).toEqual("professional_address");
        });
        it('Testing Testing word ProfessionalAddress__c',function(){
            expect(Filter.camelCase2SnakeCase("ProfessionalAddress__c")).toEqual("professional_address__c");
        });
        it('Testing  word Professional_Address__c',function(){
            expect(Filter.camelCase2SnakeCase("Professional_Address__c")).toEqual("professional_address__c");
        });
        it('Testing word Professional_Address__test',function(){
            expect(Filter.camelCase2SnakeCase("Professional_Address__Test")).toEqual("professional_address__test");
        });
    });
    
    describe('toAscii',function(){
        it('Testing special characteres to ASCII',function(){
            expect(Filter.toAscii("ÀùŔ")).toEqual("AuR");
        });
        it('Testing portuguese word with special characteres to ASCII',function(){
            expect(Filter.toAscii("Maçã")).toEqual("Maca");
        });
        it('Testing English word without special characteres to ASCII',function(){
            expect(Filter.toAscii("House")).toEqual("House");
        });
    });
    

    describe('trim',function(){
        it('Testing Checking trim function removing space from begin and from end of word',function(){
            expect(Filter.trim(" Hi ")).toEqual("Hi");
        });
        it('Testing Checking trim function removing space from begin and from end of phrase',function(){
            expect(Filter.trim(" Hi everyone. You are so special. ")).toEqual("Hi everyone. You are so special.");
        });
        it('Testing Checking trim function removing space from begin of phrase',function(){
            expect(Filter.trim(" Hi everyone. You are so special.")).toEqual("Hi everyone. You are so special.");
        });
        it('Testing Checking trim function removing space from end of phrase',function(){
            expect(Filter.trim("Hi everyone. You are so special. ")).toEqual("Hi everyone. You are so special.");
        });
        it('Testing null input/output. Return empty string',function(){
            expect(Filter.trim(null)).toEqual("");
        });
        it('Testing to remove special invisible character space',function(){
        	//Take care. The spaces below are not regular space. They are special character ' '
            expect(Filter.trim(' Muangthong ')).toEqual("Muangthong");
        });
    });
    
    describe('onlyNumber',function(){
        it('Testing Checking onlyNumber function removing point . and hifen - from number',function(){
            expect(Filter.onlyNumber("32.340-040")).toEqual("32340040");
        });
    });
    
    describe('onlyA2Z',function(){
        it('Testing Checking onlyA2Z function removing spaces, interrogation point, number, etc',function(){
            expect(Filter.onlyA2Z("Testando isto daqui 2?. Vai tirar tudo")).toEqual("TestandoistodaquiVaitirartudo");
        });
    });
    
    describe('onlySpaceA2Z',function(){
        it('Testing Checking onlySpaceA2Z function removing interrogation point, number, etc',function(){
            expect(Filter.onlySpaceA2Z("Testando isto daqui 2?. Vai tirar tudo")).toEqual("Testando isto daqui  Vai tirar tudo");
        });
        it('Testing Checking onlyA2Z function removing spaces, interrogation point, number, etc',function(){
            expect(Filter.onlySpaceA2Z("G.BRANCO")).toEqual("GBRANCO");
        });
    });
    
    describe('multipleSpace2Single',function(){
        it('Testing multipleSpaces2Single replacing multiple to single',function(){
            expect(Filter.multipleSpace2Single("Testando  isto  daqui.     Deu    certo?")).toEqual("Testando isto daqui. Deu certo?");
        });
    });
    
    describe('removeFromArray',function(){
        it('Testing remove all itens from array',function(){
            expect(Filter.removeFromArray(Array( "DE","DA","DO","DOS","DAS", "COM", "POR", "PRA" ))).toEqual(Array());
        });
        it('Testing remove all itens, but returning some elements',function(){
            expect(Filter.removeFromArray(Array( "DE","A", "DA","b", "DO","C","DOS","DAS", "COM", "POR", "PRA","d" ))).toEqual(Array("A","b","C","d"));
        });
    });

    describe('punctuationMarks2Space',function(){
        it('Testing replace punctuationMarks to space',function(){
            expect(Filter.punctuationMarks2Space("test,right,now")).toEqual("test right now");
        });
        it('Testing replace punctuationMarks to space',function(){
            expect(Filter.punctuationMarks2Space("test,right,now!!!Right.")).toEqual("test right now   Right ");
        });
    });
    
    /* jasmine specs for services go here */
    describe('phrase2Words',function(){
        it('Testing phrase2Words',function(){
            expect(Filter.phrase2Words("Testando isto daqui 2?. Vai tirar tudo")).toEqual(Array("Testando","isto","daqui","2","Vai","tirar","tudo"));
        });
        it('Testing phrase2Words',function(){
            expect(Filter.phrase2Words("Será que isto está funcionando????Sim!!!!Ou não???")).toEqual(Array("Será","que","isto","está","funcionando","Sim","Ou","não"));
        });
        it('Testing phrase2Words',function(){
            expect(Filter.phrase2Words("A menina, de nome Francisca, é campeã!!!!!!!!Parabéns para a garota!")).toEqual(Array("A","menina","de","nome","Francisca","é","campeã","Parabéns","para","a","garota"));
        });
        it('Testing abbreviation',function(){
            expect(Filter.phrase2Words("G.BRANCO")).toEqual(Array("G","BRANCO"));
        });
    });
    
    describe('_default',function(){
        it('Testing Validating _default value must be null',function(){
            expect(Filter._default(null,"oi")).toEqual("oi");
        });

        it('Checking if default filter is not replacing integer zero by default value',function(){
            expect(Filter._default(0,"oi")).toEqual(0);
        });
        
        it('Checking if default filter is not replacing empty string by default value',function(){
            expect(Filter._default("","oi")).toEqual("");
        });
        
        it('Checking if default filter is not replacing string space by default value',function(){
            expect(Filter._default(" ","oi")).toEqual(" ");
        });
        
        it('Checking if default filter is not replacing string space by default empty zero value',function(){
            expect(Filter._default(" ",0)).toEqual(" ");
        });
        
        it('Checking if default filter is replacing string space by default empty zero value',function(){
            expect(Filter._default(null,0)).toEqual(0);
        });
    });
    
    describe('int2null',function(){
        it('Validating int2null value must be null',function(){
            expect(Filter.int2null(0)).toEqual(null);
        });

        it('Validating int2null value must be -1',function(){
            expect(Filter.int2null(-1)).toEqual(-1);
        });
        
        it('Validating int2null value must be 1',function(){
            expect(Filter.int2null(1)).toEqual(1);
        });
    });
    
    describe('string2null',function(){
        it('Validating string2null value must be null',function(){
            expect(Filter.string2null("")).toEqual(null);
        });
        
        it('Validating string2null value must be 3 string spaces',function(){
            expect(Filter.string2null("   ")).toEqual("   ");
        });

        it('Validating string2null value must be a string space',function(){
            expect(Filter.string2null(" ")).toEqual(" ");
        });

        it('Validating string2null value must be letter "a"',function(){
            expect(Filter.string2null("a")).toEqual("a");
        });
    });
    
    
    describe('val2DBoolean',function(){
        it('Value is acceptable boolean true',function(){
            expect(Filter.val2DBoolean(true)).toEqual(true);
        });

        it('Value is acceptable boolean false',function(){
            expect(Filter.val2DBoolean(false)).toEqual(false);
        });
        
        it('Value is acceptable boolean "true"',function(){
            expect(Filter.val2DBoolean("true")).toEqual(true);
        });
        
        it('Value is acceptable boolean "false"',function(){
            expect(Filter.val2DBoolean("false")).toEqual(false);
        });
        
        it('Value is acceptable boolean "t"',function(){
            expect(Filter.val2DBoolean("t")).toEqual(true);
        });
        
        it('Value is acceptable boolean "f"',function(){
            expect(Filter.val2DBoolean("f")).toEqual(false);
        });
        
        it('Value is acceptable boolean 0',function(){
            expect(Filter.val2DBoolean(0)).toEqual(false);
        });
        
        it('Input is acceptable 1',function(){
            expect(Filter.val2DBoolean(1)).toEqual(true);
        });
        
        it('Value is acceptable boolean 0.0',function(){
            expect(Filter.val2DBoolean(0.0)).toEqual(false);
        });

        it('Check null value',function(){
            expect(Filter.val2DBoolean(null)).toEqual(false);
        });
        it('Check empty array value',function(){
            expect(Filter.val2DBoolean([])).toEqual(false);
        });
        it('Check empty string',function(){
            expect(Filter.val2DBoolean(" ")).toEqual(true);
        });
        it('Check empty string',function(){
            expect(Filter.val2DBoolean("")).toEqual(false);
        });
        it('Check number value "0"',function(){
            expect(Filter.val2DBoolean("0")).toEqual(false);
        });
        it('Check number value "1"',function(){
            expect(Filter.val2DBoolean("1")).toEqual(true);
        });
        it('Check number value T',function(){
            expect(Filter.val2DBoolean("T")).toEqual(true);
        });
        it('Check number value F',function(){
            expect(Filter.val2DBoolean("F")).toEqual(true);
        });
        it('Check string value "aaa"',function(){
            expect(Filter.val2DBoolean("aaa")).toEqual(true);
        });
    });
        
    describe('normalizeTwitterLink',function(){

        it('Test @twitter_username pattern',function(){
            expect(Filter.normalizeTwitterLink("@maajdrall")).toEqual("http://www.twitter.com/maajdrall");
        });
        it('Test just twitter_username pattern',function(){
            expect(Filter.normalizeTwitterLink("maajdrall")).toEqual("http://www.twitter.com/maajdrall");
        });
        it("Test twitter url without www pattern",function(){
            expect(Filter.normalizeTwitterLink("twitter.com/maajdrall")).toEqual('http://twitter.com/maajdrall');
        });
        it("Test twitter url without www pattern",function(){
            expect(Filter.normalizeTwitterLink('www.twitter.com/maajdrall')).toEqual('http://www.twitter.com/maajdrall');
        });
        it("Test twitter url http pattern",function(){
            expect(Filter.normalizeTwitterLink('http://www.twitter.com/maajdrall')).toEqual('http://www.twitter.com/maajdrall');
        });
        it("Test twitter url https pattern",function(){
            expect(Filter.normalizeTwitterLink('https://www.twitter.com/maajdrall')).toEqual('https://www.twitter.com/maajdrall');
        });
        //Test capitalize remove filter
        it("Test @twitter_username pattern and to lower",function(){
            expect(Filter.normalizeTwitterLink('@maajDrall')).toEqual('http://www.twitter.com/maajdrall');
        });
    });
    
    describe('normalizeFacebookLink',function(){

        it('Test just facebook_username pattern',function(){
            expect(Filter.normalizeFacebookLink("maajdrall")).toEqual("http://www.facebook.com/maajdrall");
        });
        it("Test facebook url without www pattern",function(){
            expect(Filter.normalizeFacebookLink("facebook.com/maajdrall")).toEqual('http://facebook.com/maajdrall');
        });
        it("Test facebook url without www pattern",function(){
            expect(Filter.normalizeFacebookLink('www.facebook.com/maajdrall')).toEqual('http://www.facebook.com/maajdrall');
        });
        it("Test facebook url http pattern",function(){
            expect(Filter.normalizeFacebookLink('http://www.facebook.com/maajdrall')).toEqual('http://www.facebook.com/maajdrall');
        });
        it("Test facebook url https pattern",function(){
            expect(Filter.normalizeFacebookLink('https://www.facebook.com/maajdrall')).toEqual('https://www.facebook.com/maajdrall');
        });
        //Test capitalize remove filter
        it("Test facebook_username pattern and to lower",function(){
            expect(Filter.normalizeFacebookLink('maajDrall')).toEqual('http://www.facebook.com/maajdrall');
        });
    });
    
    describe('normalizeGooglePlusLink',function(){

        it('Test just plus.google_username pattern',function(){
            expect(Filter.normalizeGooglePlusLink("123456789")).toEqual("http://plus.google.com/123456789");
        });
        it("Test plus.google url without www pattern",function(){
            expect(Filter.normalizeGooglePlusLink("plus.google.com/123456789")).toEqual('http://plus.google.com/123456789');
        });
        it("Test plus.google url http pattern",function(){
            expect(Filter.normalizeGooglePlusLink('http://plus.google.com/123456789')).toEqual('http://plus.google.com/123456789');
        });
        it("Test plus.google url https pattern",function(){
            expect(Filter.normalizeGooglePlusLink('https://plus.google.com/123456789')).toEqual('https://plus.google.com/123456789');
        });
    });
    
    describe('normalizeYoutubeLink',function(){

        it('Test just youtube_username pattern',function(){
            expect(Filter.normalizeYoutubeLink("maajdrall")).toEqual("http://www.youtube.com/maajdrall");
        });
        it("Test youtube url without www pattern",function(){
            expect(Filter.normalizeYoutubeLink("youtube.com/maajdrall")).toEqual('http://youtube.com/maajdrall');
        });
        it("Test youtube url with youtu.be pattern",function(){
            expect(Filter.normalizeYoutubeLink("youtu.be/maajdrall")).toEqual('http://www.youtube.com/maajdrall');
        });
        it("Test youtube url without www pattern",function(){
            expect(Filter.normalizeYoutubeLink('www.youtube.com/maajdrall')).toEqual('http://www.youtube.com/maajdrall');
        });
        it("Test youtube url http pattern",function(){
            expect(Filter.normalizeYoutubeLink('http://www.youtube.com/maajdrall')).toEqual('http://www.youtube.com/maajdrall');
        });
        it("Test youtube url https pattern",function(){
            expect(Filter.normalizeYoutubeLink('https://www.youtube.com/maajdrall')).toEqual('https://www.youtube.com/maajdrall');
        });
        //Test capitalize remove filter
        it("Test youtube_username pattern and to lower",function(){
            expect(Filter.normalizeYoutubeLink('maajDrall')).toEqual('http://www.youtube.com/maajdrall');
        });
    });
    
    describe('normalizeLinkedinLink',function(){

        it('Test just linkedin_username pattern',function(){
            expect(Filter.normalizeLinkedinLink("in/maajdrall")).toEqual("http://www.linkedin.com/in/maajdrall");
        });
        it("Test linkedin url without www pattern",function(){
            expect(Filter.normalizeLinkedinLink("linkedin.com/in/maajdrall")).toEqual('http://linkedin.com/in/maajdrall');
        });
        it("Test linkedin url without www pattern",function(){
            expect(Filter.normalizeLinkedinLink('www.linkedin.com/in/maajdrall')).toEqual('http://www.linkedin.com/in/maajdrall');
        });
        it("Test linkedin url http pattern",function(){
            expect(Filter.normalizeLinkedinLink('http://www.linkedin.com/in/maajdrall')).toEqual('http://www.linkedin.com/in/maajdrall');
        });
        it("Test linkedin url https pattern",function(){
            expect(Filter.normalizeLinkedinLink('https://www.linkedin.com/in/maajdrall')).toEqual('https://www.linkedin.com/in/maajdrall');
        });
        //Test capitalize remove filter
        it("Test linkedin_username pattern and to lower",function(){
            expect(Filter.normalizeLinkedinLink('in/maajDrall')).toEqual('http://www.linkedin.com/in/maajdrall');
        });
    });
    
    describe('normalizeInstagramLink',function(){

        it('Test just instagram_username pattern',function(){
            expect(Filter.normalizeInstagramLink("maajdrall")).toEqual("http://www.instagram.com/maajdrall");
        });
        it("Test instagram url without www pattern",function(){
            expect(Filter.normalizeInstagramLink("instagram.com/maajdrall")).toEqual('http://instagram.com/maajdrall');
        });
        it("Test instagram url without www pattern",function(){
            expect(Filter.normalizeInstagramLink('www.instagram.com/maajdrall')).toEqual('http://www.instagram.com/maajdrall');
        });
        it("Test instagram url http pattern",function(){
            expect(Filter.normalizeInstagramLink('http://www.instagram.com/maajdrall')).toEqual('http://www.instagram.com/maajdrall');
        });
        it("Test instagram url https pattern",function(){
            expect(Filter.normalizeInstagramLink('https://www.instagram.com/maajdrall')).toEqual('https://www.instagram.com/maajdrall');
        });
        //Test capitalize remove filter
        it("Test instagram_username pattern and to lower",function(){
            expect(Filter.normalizeInstagramLink('maajDrall')).toEqual('http://www.instagram.com/maajdrall');
        });
    });
    
    describe('normalizeWebsiteLink',function(){

        it('Test website url without www pattern',function(){
            expect(Filter.normalizeWebsiteLink("drall.com.br")).toEqual("http://drall.com.br");
        });
        it('Test website url with www pattern',function(){
            expect(Filter.normalizeWebsiteLink("www.drall.com.br")).toEqual("http://www.drall.com.br");
        });
        it("Test website url without www, but with http:// pattern",function(){
            expect(Filter.normalizeWebsiteLink("http://drall.com.br")).toEqual('http://drall.com.br');
        });
        it("Test website url with https:// pattern",function(){
            expect(Filter.normalizeWebsiteLink('https://www.drall.com.br')).toEqual('https://www.drall.com.br');
        });
        it("Test website url with www pattern and to lower",function(){
            expect(Filter.normalizeWebsiteLink('www.Drall.com.br')).toEqual('http://www.drall.com.br');
        });
    });
    
    describe('clean_html',function(){

        it('Test clean html on simple scenario',function(){
            expect(Filter.clean_html("Testando isto daqui <b>2</b>?. <p class='ok'>Vai tirar tudo</p>.Não")).toEqual("Testando isto daqui 2?. Vai tirar tudo.Não");
        });
    });
    
    describe('slug',function(){

        it('Test slug on simple scenario',function(){
			expect(Filter.slug("Testando isto daqui 2?. Vai tirar tudo")).toEqual("testando-isto-daqui-2-vai-tirar-tudo");
			expect(Filter.slug("G.BRANCO")).toEqual("g-branco");
			
			expect(Filter.slug(Filter.slug("Testando isto daqui 2?. Vai tirar tudo"))).toEqual("testando-isto-daqui-2-vai-tirar-tudo");
			expect(Filter.slug(Filter.slug("G.BRANCO"))).toEqual("g-branco");
			expect(Filter.slug(Filter.slug("G_BRANCO"))).toEqual("g_branco");
        });
    });
    
    describe('slug_postgresql_column_name',function(){

        it('Test slug_postgresql_column_name on simple scenario',function(){
			expect(Filter.slug_postgresql_column_name("Testando isto daqui 2?. Vai tirar tudo")).toEqual("testando_isto_daqui_2___vai_tirar_tudo");
			expect(Filter.slug_postgresql_column_name("G.BRANCO")).toEqual("g_branco");
			
			expect(Filter.slug(Filter.slug_postgresql_column_name("Testando isto daqui 2?. Vai tirar tudo"))).toEqual("testando_isto_daqui_2___vai_tirar_tudo");
			expect(Filter.slug(Filter.slug_postgresql_column_name("G.BRANCO"))).toEqual("g_branco");
			expect(Filter.slug(Filter.slug_postgresql_column_name("G_BRANCO"))).toEqual("g_branco");
			
			expect(Filter.slug(Filter.slug_postgresql_column_name("G_BRANCO-vamos_cortar_em-50-caracteres para eu ver que está funcionando corretamente"))).toEqual("g_branco_vamos_cortar_em_50_caracteres_para_eu_ver");
        });
    });
    
    describe('cpf',function(){

        it('Test cpf on simple scenario',function(){
			expect(Filter.cpf("12345678901")).toEqual("123.456.789-01");
			expect(Filter.cpf("00131415161")).toEqual("001.314.151-61");
        });
    });
    
    describe('cep',function(){

        it('Test cep on simple scenario',function(){
			expect(Filter.cep("32340040")).toEqual("32340-040");
			expect(Filter.cep("00131415")).toEqual("00131-415");
        });
    });
    
    describe('cnpj',function(){

        it('Test cnpj on simple scenario',function(){
			expect(Filter.cnpj("12345678901234")).toEqual("12.345.678/9012-34");
			expect(Filter.cnpj("00131415161718")).toEqual("00.131.415/1617-18");
        });
    });
});
