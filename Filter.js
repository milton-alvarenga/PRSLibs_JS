export function camelCase2SnakeCase(v){
    if(typeof v !== "string"){
        return v;
    }
    return v.replace(/([a-z])([A-Z])/, function($1, $2, $3){
        return $2+"_"+$3;
    }).toLowerCase();
}
export function capitalize(v){
    if(typeof v !== "string"){
        return v;
    }
    var pieces = v.split(" ");
    for ( var i = 0; i < pieces.length; i++ ){
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1).toLowerCase();
    }
    return pieces.join(" ");
}
export function lower(v){
    if(typeof v !== "string"){
        return v;
    }
    return v.toLowerCase();
}
export function multipleSpace2Single(v){
    if(typeof v == "string"){
        return v.replace(/\s+/g, ' ');
    }
    return v;
}
export function normalizeTwitterLink(twitter_link){
    if(typeof twitter_link !== "string"){
        return twitter_link;
    }
    if( twitter_link.match(/twitter[.]com/i) ){
        return lower(normalizeWebsiteLink( twitter_link ));
    }
    
    if( twitter_link.match( /^[@]/i) ){
        twitter_link = twitter_link.substr(1);
    }
    return "http://www.twitter.com/"+lower(twitter_link);
}
export function normalizeFacebookLink(facebook_link){
    if(typeof facebook_link !== "string"){
        return facebook_link;
    }
    if( facebook_link.match(/facebook[.]com/i) ){
        return lower(normalizeWebsiteLink( facebook_link ));
    }
    
    return "http://www.facebook.com/"+lower(facebook_link);
}
export function normalizeGooglePlusLink(googleplus_link){
    if(typeof googleplus_link !== "string"){
        return googleplus_link;
    }
    if( googleplus_link.match(/plus[.]google[.]com/i) ){
        return lower(normalizeWebsiteLink( googleplus_link ));
    }
    
    return "http://plus.google.com/"+lower(googleplus_link);
}
export function normalizeYoutubeLink(youtube_link){
    if(typeof youtube_link !== "string"){
        return youtube_link;
    }
    
    if( youtube_link.match(/youtube[.]com/i) ){
        return lower(normalizeWebsiteLink( youtube_link ));
    }
    youtube_link = lower(youtube_link);
    var pos = youtube_link.indexOf("youtu.be/");
    if( pos > -1 ){
        youtube_link = youtube_link.substr(pos+9);
    }
    return "http://www.youtube.com/"+youtube_link;
}
export function normalizeLinkedinLink(linkedin_link){
    if(typeof linkedin_link !== "string"){
        return linkedin_link;
    }
    if( linkedin_link.match(/linkedin[.]com/i) ){
        return lower(normalizeWebsiteLink( linkedin_link ));
    }
    
    return "http://www.linkedin.com/"+lower(linkedin_link);
}
export function normalizeInstagramLink(instagram_link){
    if(typeof instagram_link !== "string"){
        return instagram_link;
    }
    if( instagram_link.match(/instagram[.]com/i) ){
        return lower(normalizeWebsiteLink( instagram_link ));
    }
    
    return "http://www.instagram.com/"+lower(instagram_link);
}
export function normalizeWebsiteLink( website_link ){
    if(typeof website_link !== "string"){
        return website_link;
    }
    website_link = lower(website_link);
    if( website_link.match(/^http[s]?[:]\/{2}/) ){
        return website_link;
    }
    return "http://"+website_link;
}
export function _default( v, default_value ){
    if(v === null){
        return default_value;
    }
    return v;
}
export function int2null( v ){
    if(v === 0 ){
        return null;
    }
    return v;
}
export function string2null( v ){
    if(v === "" ){
        return null;
    }
    return v;
}
//Convert acceptable boolean values to real boolean value
export function val2DBoolean(v){
    var not_standard_false_values = ["f","false","0"];
    
    //Not standard false values that must to be converted
    if(not_standard_false_values.indexOf(v) > -1){
        return false;
    }
    
    //Empty array is not standard false values that must to be converted
    if(
        v
        &&
        typeof v == "object"
        &&
        v.hasOwnProperty("length")
        &&
        v.length === 0
    ){
        return false;
    }
    
    return Boolean(v);
}
export function onlyA2Z(v){
    if(typeof v == "string"){
        return v.replace(/[^a-zA-Z]/g, '');
    }
    return v;
}
export function onlyNumber(v){
    if(typeof v == "string"){
        return v.replace(/([^0-9])/g, '');
    }
    return v;
}
export function onlySpaceA2Z(v){
    if(typeof v == "string"){
        return v.replace(/[^a-zA-Z\ ]/g, '');
    }
    return v;
}
export function phrase2Words(v){
    if(typeof v !== "string"){
        return v;
    }
    return punctuationMarks2Space(v).replace(/\s+/g, ' ').replace(/^\s+|\s+$/gm, '').split(" ");
}
export function punctuationMarks2Space(v){
    if(typeof v !== "string"){
        return v;
    }
    return v.replace(/[.,\/?!:;]/g, ' ');
}
export function removeFromArray(array, removeFromArray){
    if (typeof removeFromArray != "Array"){
        removeFromArray = Array( "DE","DA","DO","DOS","DAS", "COM", "POR", "PRA" );
    }
    var output = Array();
    var len = array.length;
    for(var x=0; x<len; x++){
        var found = false;
        for (var key in removeFromArray) {
            if (removeFromArray[key] == array[x]) {
                found = true;
                break;
            }
        }
        if(!found){
            output.push(array[x]);
        }
    }
    return output;
}
export function toAscii( word ){
    if(typeof word !== "string"){
        return word;
    }
    //From => to 
    var chars = {
        'Š':'S', 'š':'s'
        ,'Đ':'Dj', 'đ':'dj'
        ,'Ž':'Z', 'ž':'z'
        ,'Č':'C', 'č':'c', 'Ć':'C', 'ć':'c'
        ,'À':'A', 'Á':'A', 'Â':'A', 'Ã':'A', 'Ä':'A', 'Å':'A', 'Æ':'A'
        ,'Ç':'C'
        ,'È':'E', 'É':'E','Ê':'E', 'Ë':'E'
        ,'Ì':'I', 'Í':'I', 'Î':'I', 'Ï':'I'
        ,'Ñ':'N'
        ,'Ò':'O', 'Ó':'O', 'Ô':'O','Õ':'O', 'Ö':'O', 'Ø':'O'
        ,'Ù':'U', 'Ú':'U', 'Û':'U', "Ũ":"U","Ü":"U"
        ,'Ý':'Y'
        ,'Ŕ':'R'
        ,'Þ':'B', 'ß':'Ss'
        ,'à':'a', 'á':'a', 'â':'a', 'ã':'a', 'ä':'a', 'å':'a', 'æ':'a'
        ,'ç':'c'
        ,'è':'e', 'é':'e','ê':'e', 'ë':'e'
        ,'ì':'i', 'í':'i', 'î':'i', 'ï':'i'
        ,'ð':'o', 'ò':'o', 'ó':'o','ô':'o', 'õ':'o', 'ö':'o', 'ø':'o'
        ,'ñ':'n'
        ,'ù':'u', 'ú':'u', 'û':'u', 'ũ':'u',"ü":"u"
        ,'ý':'y', 'þ':'b','ÿ':'y'
        ,'ŕ':'r',
    };
    for( var i in chars){
        word = word.replace(new RegExp(i, 'g'),chars[i]);
    }
    return word;
}
export function trim(v){
    v = _default(v,"");
    //Payattention. It is not empty to empty. It is a special character
    //like empty space to empty space
    v = v.replace(" "," ");
    if (typeof v == "string"){
        return v.replace(/^\s+|\s+$/gm, '');
    }
    return v;
}
export function upper(v){
    if(typeof v !== "string"){
        return v;
    }
    return v.toUpperCase();
}
export function slug(v){
    v = toAscii(v);
    v = lower(v.trim());
    v = v.replace(/[^a-z0-9_-]/g, '-');
    v = v.replace(/-+/g, "-");
    return v.replace(/-+$/g, '');
}
export function slug_postgresql_column_name(v){
    v = toAscii(v);
    v = lower(v.trim());
    v = v.replace(/[^a-z0-9_]/g, '_');
    return v.replace(/_+$/g, '').substr(0,50);
}
export function clean_html(v,exceptions_tags){
    exceptions_tags = (((exceptions_tags || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi
    return v.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
        return exceptions_tags.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
}
export function ___mask($val, $mask){
    var $masked = '';
    var $k = 0;
    for(var $i = 0; $i<=$mask.length-1; $i++) {
        if($mask[$i] == '#'){
            if($val.length-1 >= $k){
                $masked += $val[$k++];
            }
        }
        else {
            if($mask.length-1 > $i){
                $masked += $mask[$i];
            }
        }
    }
    return $masked;
}
export function cpf(v){
    return ___mask(v,'###.###.###-##');
}
export function cep(v){
    return ___mask(v,'#####-###');
}
export function cnpj(v){
    return ___mask(v,'##.###.###/####-##');
}