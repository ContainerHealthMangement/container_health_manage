document.write("<script language='javascript' src='../../AdminLTE-2.4.0-rc/bower_components/jquery/dist/jquery.min.js'></script>");

//基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('status-monitor'));
var data1 = [];
console.log("aaabbbcc:");
loadHealth(data1);
console.log(data1);
console.log("ddddd:");
var data2 = [];
loadHealth_1(data2);
console.log(data2);
var geoCoordMap = {
		'王家营西':[102.84491,24.930513],
		'黄岛港':[120.169541,36.005019],
		'棠溪':[116.268336,27.862727],
		'黄岛港':[120.169541,36.005019],
		'芜湖西':[118.384108,31.36602],
		'艮山门':[120.185499,30.280426],
		'重庆东':[106.530635,29.544606],
		'嘉兴东':[120.760428,30.773992],
		'永川':[105.880358,29.296488],
		'新港':[118.870321,32.167084],
		'眉山':[103.84143,30.061115],
		'艮山门':[120.185499,30.280426],
		'黄岛港':[120.169541,36.005019],
		'艮山门':[120.185499,30.280426],
		'六盘水':[104.852087,26.591866],
		'王家营西':[102.84491,24.930513],
		'温州西':[120.690635,28.002838],
		'温州西':[120.690635,28.002838],
		'鹰潭南':[117.03545,28.24131],
		'金港':[106.10085,30.821309],
		'上海西':[121.487899,31.249162],
		'黄岛港':[120.169541,36.005019],
		'黄岛港':[120.169541,36.005019],
		'温州西':[120.690635,28.002838],
		'团结村':[109.014062,34.356359],
		'上海西':[121.487899,31.249162],
		'贵阳东':[106.709177,26.629907],
		'贵阳东':[106.709177,26.629907],
		'遵义南':[106.93126,27.699961],
		'宜宾北':[104.633019,28.769675],
		'金州':[121.956582,39.298619],
		'南充东':[106.105554,30.800965],
		'宁波北':[121.579006,29.885259],
		'永康':[120.108684,28.940177],
		'团结村':[109.014062,34.356359],
		'团结村':[109.014062,34.356359],
		'隆昌':[105.252958,29.367869],
		'上海西':[121.487899,31.249162],
		'义乌西':[120.067296,29.306444],
		'隆昌':[105.252958,29.367869],
		'塘沽':[117.649081,39.007936],
		'黄岛港':[120.169541,36.005019],
		'遵义南':[106.93126,27.699961],
		'遵义南':[106.93126,27.699961],
		'黄岛港':[120.169541,36.005019],
		'黄岛港':[120.169541,36.005019],
		'宜宾北':[104.633019,28.769675],
		'新港':[118.870321,32.167084],
		'黄岛港':[120.169541,36.005019],
		'沈阳东':[123.432791,41.808645],
		'常州':[119.981861,31.771397],
		'团结村':[109.014062,34.356359],
		'沈阳东':[123.432791,41.808645],
		'沈阳东':[123.432791,41.808645],
		'黄岛港':[120.169541,36.005019],
		'小塘西':[119.872295,31.774863],
		'黄岛港':[120.169541,36.005019],
		'三明':[117.642194,26.270835],
		'辽阳':[123.172451,41.273339],
		'北郊':[113.085254,22.605038],
		'黄岛港':[120.169541,36.005019],
		'沈阳东':[123.432791,41.808645],
		'汉中':[107.045478,33.081569],
		'宁波北':[121.579006,29.885259],
		'辽阳':[123.172451,41.273339],
		'黄岛港':[120.169541,36.005019],
		'艮山门':[120.185499,30.280426],
		'乌北':[123.300739,46.824163],
		'黄岛港':[120.169541,36.005019],
		'醴陵东':[113.470625,27.662279],
		'博兴':[118.225715,37.191354],
		'团结村':[109.014062,34.356359],
		'塘沽':[117.649081,39.007936],
		'泉州东':[118.600362,24.901652],
		'衡水':[115.686229,37.746929],
		'杜科':[118.080741,36.812812],
		'团结村':[109.014062,34.356359],
		'塘沽':[117.649081,39.007936],
		'团结村':[109.014062,34.356359],
		'西宁':[101.767921,36.640739],
		'呼和浩特':[111.660351,40.828319],
		'辽阳':[123.172451,41.273339],
		'大朗':[113.948688,22.949973],
		'茂名东':[110.931245,21.668226],
		'厦门高崎':[118.117034,24.554358],
		'厦门高崎':[118.117034,24.554358],
		'赣州东':[115.012368,25.873356],
		'福州东':[119.330221,26.047125],
		'辽阳':[123.172451,41.273339],
		'常平':[114.00236,22.980303],
		'辽阳':[123.172451,41.273339],
		'棠溪':[116.268336,27.862727],
		'东孚':[117.937334,24.562971],
		'汉西':[120.351788,30.925281],
		'西宁':[101.767921,36.640739],
		'烟台':[121.309555,37.536562],
		'北郊':[113.085254,22.605038],
		'王家营西':[102.84491,24.930513],
		'黄岛港':[120.169541,36.005019],
		'宝鸡东':[107.170645,34.364081],
		'张家口南':[114.893782,40.811188],
		'泉州东':[118.600362,24.901652],
		'苏家屯':[123.426289,41.589345],
		'湘潭':[112.935556,27.835095],
		'黄岛港':[120.169541,36.005019],
		'温州西':[120.690635,28.002838],
		'城厢':[118.954443,25.433375],
		'福州东':[119.330221,26.047125],
		'福州东':[119.330221,26.047125],
		'绵阳':[104.705519,31.504701],
		'张家口南':[114.893782,40.811188],
		'满洲里(境)':[117.603687,49.500032],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'沈阳东':[123.432791,41.808645],
		'无锡南':[120.305456,31.570037],
		'秦皇岛南':[119.604368,39.945462],
		'佛山东':[113.134026,23.035095],
		'艮山门':[120.185499,30.280426],
		'王家营西':[102.84491,24.930513],
		'金昌':[102.208126,38.516072],
		'沈阳东':[123.432791,41.808645],
		'辽阳':[123.172451,41.273339],
		'杭州北':[120.219375,30.259244],
		'北郊':[113.085254,22.605038],
		'辽阳':[123.172451,41.273339],
		'温州西':[120.690635,28.002838],
		'秦皇岛南':[119.604368,39.945462],
		'杜科':[118.080741,36.812812],
		'北郊':[113.085254,22.605038],
		'北郊':[113.085254,22.605038],
		'北郊':[113.085254,22.605038],
		'大朗':[113.948688,22.949973],
		'沈阳东':[123.432791,41.808645],
		'怀化南':[109.986959,27.557483],
		'青州市南':[118.470187,36.680584],
		'南星桥':[120.181501,30.226221],
		'东孚':[117.937334,24.562971],
		'北郊':[113.085254,22.605038],
		'大朗':[113.948688,22.949973],
		'源潭':[112.984928,23.27313],
		'北郊':[113.085254,22.605038],
		'清涧':[110.289294,37.187444],
		'源潭':[112.984928,23.27313],
		'黄岛港':[120.169541,36.005019],
		'北郊':[113.085254,22.605038],
		'宁波北':[121.579006,29.885259],
		'北仑港':[121.886725,29.927878],
		'辽阳':[123.172451,41.273339],
		'大朗':[113.948688,22.949973],
		'青州市南':[118.470187,36.680584],
		'北郊':[113.085254,22.605038],
		'滕州':[117.147616,35.065791],
		'大朗':[113.948688,22.949973],
		'南昌南':[115.893528,28.689578],
		'合肥南':[117.282699,31.866942],
		'杜科':[118.080741,36.812812],
		'牡丹江':[129.608035,44.588521],
		'北仑港':[121.886725,29.927878],
		'北仑港':[121.886725,29.927878],
		'大朗':[113.948688,22.949973],
		'艮山门':[120.185499,30.280426],
		'团结村':[109.014062,34.356359],
		'余姚西':[121.152779,29.996457],
		'合肥南':[117.282699,31.866942],
		'滨江西':[120.19237,30.187588],
		'余姚西':[121.152779,29.996457],
		'六盘水':[104.852087,26.591866],
		'余姚西':[121.152779,29.996457],
		'鹰潭南':[117.03545,28.24131],
		'嘉兴东':[120.760428,30.773992],
		'新余':[114.947117,27.822322],
		'北郊':[113.085254,22.605038],
		'福州东':[119.330221,26.047125],
		'宜春':[114.400039,27.81113],
		'扎兰屯':[121.929202,47.743403],
		'长沙东':[112.979353,28.213478],
		'福州东':[119.330221,26.047125],
		'北仑港':[121.886725,29.927878],
		'北仑港':[121.886725,29.927878],
		'北仑港':[121.886725,29.927878],
		'满洲里(境)':[117.603687,49.500032],
		'北仑港':[121.886725,29.927878],
		'八景':[116.990717,36.660766],
		'沈阳东':[123.432791,41.808645],
		'汉西':[120.351788,30.925281],
		'八景':[116.990717,36.660766],
		'南昌南':[115.893528,28.689578],
		'厦门高崎':[118.117034,24.554358],
		'塘沽':[117.649081,39.007936],
		'遂溪':[110.039895,21.270307],
		'余姚西':[121.152779,29.996457],
		'钦州港':[108.606803,21.748212],
		'新港':[118.870321,32.167084],
		'八景':[116.990717,36.660766],
		'南昌北':[115.893528,28.689578],
		'小塘西':[119.872295,31.774863],
		'平湖南':[121.105839,30.716529],
		'上饶':[117.955464,28.457623],
		'燕岗':[112.267585,21.877947],
		'塘沽':[117.649081,39.007936],
		'清涧':[110.289294,37.187444],
		'钦州港':[108.606803,21.748212],
		'南宁':[108.297234,22.806493],
		'防城港港':[108.351791,21.617398],
		'新港':[118.870321,32.167084],
		'防城港港':[108.351791,21.617398],
		'城厢':[118.954443,25.433375],
		'永川':[105.880358,29.296488],
		'福州东':[119.330221,26.047125],
		'温州西':[120.690635,28.002838],
		'遵义北':[106.93126,27.699961],
		'阿拉山口境':[82.576354,45.172596],
		'辽阳':[123.172451,41.273339],
		'王家营西':[102.84491,24.930513],
		'白银市':[104.171241,36.546682],
		'六盘水':[104.852087,26.591866],
		'拉萨西':[91.111891,29.662557],
		'阿克苏':[81.156013,40.349444],
		'南京西':[118.778074,32.057236],
		'长春东':[125.313642,43.898338],
		'驻马店':[114.049154,32.983158],
		'阿克苏':[81.156013,40.349444],
		'白银市':[104.171241,36.546682],
		'新港(水)':[118.870321,32.167084],
		'王家营西':[102.84491,24.930513],
		'六盘水':[104.852087,26.591866],
		'燕岗':[112.267585,21.877947],
		'城厢':[118.954443,25.433375],
		'宜宾北':[104.633019,28.769675],
		'大朗':[113.948688,22.949973],
		'大朗':[113.948688,22.949973],
		'永川':[105.880358,29.296488],
		'大朗':[113.948688,22.949973],
		'临沂':[118.340768,35.072409],
		'闵行':[121.425024,31.093538],
		'大朗':[113.948688,22.949973],
		'大窑湾港':[121.898386,39.003646],
		'城厢':[118.954443,25.433375],
		'城厢':[118.954443,25.433375],
		'团结村':[109.014062,34.356359],
		'团结村':[109.014062,34.356359],
		'团结村':[109.014062,34.356359],
		'乌西':[95.468519,37.844812],
		'团结村':[109.014062,34.356359],
		'阿拉山口境':[82.576354,45.172596],
		'草海':[102.647235,25.00808],
		'城厢':[118.954443,25.433375],
		'塘沽南':[117.649081,39.007936],
		'城厢':[118.954443,25.433375],
		'黄岛港':[120.169541,36.005019],
		'城厢':[118.954443,25.433375],
		'城厢':[118.954443,25.433375],
		'茂名':[110.931245,21.668226],
		'城厢':[118.954443,25.433375],
		'金华':[119.652576,29.102899],
		'芦潮港':[121.856628,30.868678],
		'城厢':[118.954443,25.433375],
		'北郊':[113.085254,22.605038],
		'王家营西':[102.84491,24.930513],
		'城厢':[118.954443,25.433375],
		'大朗':[113.948688,22.949973],
		'大朗':[113.948688,22.949973],
		'城厢':[118.954443,25.433375],
		'大朗':[113.948688,22.949973],
		'圃田':[113.83077,34.741814],
		'团结村':[109.014062,34.356359],
		'艮山门':[120.185499,30.280426],
		'王家营西':[102.84491,24.930513],
		'闵行':[121.425024,31.093538],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'乐山':[103.760824,29.600958],
		'杨浦':[121.535717,31.30451],
		'团结村':[109.014062,34.356359],
		'大理东':[100.219209,25.693967],
		'王家营西':[102.84491,24.930513],
		'团结村':[109.014062,34.356359],
		'王家营西':[102.84491,24.930513],
		'团结村':[109.014062,34.356359],
		'城厢':[118.954443,25.433375],
		'湛江':[110.365067,21.257463],
		'黄岛港':[120.169541,36.005019],
		'长沙东':[112.979353,28.213478],
		'北郊':[113.085254,22.605038],
		'鲅鱼圈北':[122.176897,40.252584],
		'王家营西':[102.84491,24.930513],
		'城厢':[118.954443,25.433375],
		'王家营西':[102.84491,24.930513],
		'阿拉山口境':[82.576354,45.172596],
		'城厢':[118.954443,25.433375],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'城厢':[118.954443,25.433375],
		'吉安南':[114.992039,27.113848],
		'王家营西':[102.84491,24.930513],
		'城厢':[118.954443,25.433375],
		'杨浦':[121.535717,31.30451],
		'乐山':[103.760824,29.600958],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'吴家山':[114.161891,30.637189],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'城厢':[118.954443,25.433375],
		'城厢':[118.954443,25.433375],
		'王家营西':[102.84491,24.930513],
		'城厢':[118.954443,25.433375],
		'诸暨东':[120.281434,29.6994],
		'城厢':[118.954443,25.433375],
		'王家营西':[102.84491,24.930513],
		'新港':[118.870321,32.167084],
		'新港':[118.870321,32.167084],
		'八里':[118.339229,32.285499],
		'宁波北':[121.579006,29.885259],
		'黄岛港':[120.169541,36.005019],
		'宜宾北':[104.633019,28.769675],
		'新港':[118.870321,32.167084],
		'大朗':[113.948688,22.949973],
		'包头东':[109.846239,40.647119],
		'西安西':[125.150149,42.986365],
		'隆昌':[105.252958,29.367869],
		'隆昌':[105.252958,29.367869],
		'黄岛港':[120.169541,36.005019],
		'隆昌':[105.252958,29.367869],
		'艮山门':[120.185499,30.280426],
		'南阳':[112.542842,33.01142],
		'滨江西':[120.19237,30.187588],
		'大朗':[113.948688,22.949973],
		'南充东':[106.105554,30.800965],
		'北郊':[113.085254,22.605038],
		'小塘西':[119.872295,31.774863],
		'八里':[118.339229,32.285499],
		'天津港':[117.74012,39.003659],
		'重庆东':[106.530635,29.544606],
		'宁波北':[121.579006,29.885259],
		'保定':[115.49481,38.886565],
		'汉西':[120.351788,30.925281],
		'银川':[106.206479,38.502621],
		'大窑湾港':[121.898386,39.003646],
		'绵阳':[104.705519,31.504701],
		'北郊':[113.085254,22.605038],
		'大朗':[113.948688,22.949973],
		'塘沽':[117.649081,39.007936],
		'大朗':[113.948688,22.949973],
		'塘沽':[117.649081,39.007936],
		'大朗':[113.948688,22.949973],
		'八里':[118.339229,32.285499],
		'宁波北':[121.579006,29.885259],
		'塘沽':[117.649081,39.007936],
		'宁波北':[121.579006,29.885259],
		'眉山':[103.84143,30.061115],
		'汉西':[120.351788,30.925281],
		'小塘西':[119.872295,31.774863],
		'何家湾':[121.500852,31.335234],
		'无锡南':[120.305456,31.570037],
		'义乌西':[120.067296,29.306444],
		'无锡南':[120.305456,31.570037],
		'小塘西':[119.872295,31.774863],
		'怀化南':[109.986959,27.557483],
		'商丘':[115.641886,34.438589],
		'乌北':[123.300739,46.824163],
		'八里':[118.339229,32.285499],
		'汉西':[120.351788,30.925281],
		'胶州':[119.959421,36.248031],
		'许昌':[113.835312,34.02674],
		'长沙北':[112.979353,28.213478],
		'昆明东':[102.714601,25.049153],
		'燕岗':[112.267585,21.877947],
		'八里':[118.339229,32.285499],
		'邯郸':[114.482694,36.609308],
		'重庆东':[106.530635,29.544606],
		'连云港港口':[119.173872,34.601549],
		'潍坊西':[119.142634,36.716115],
		'贵阳东':[106.709177,26.629907],
		'万州':[108.413439,30.710054],
		'乌北':[123.300739,46.824163],
		'八里':[118.339229,32.285499],
		'八里':[118.339229,32.285499],
		'八里':[118.339229,32.285499],
		'西安西':[125.150149,42.986365],
		'商丘':[115.641886,34.438589],
		'八里':[118.339229,32.285499],
		'宜宾北':[104.633019,28.769675],
		'万州':[108.413439,30.710054],
		'八里':[118.339229,32.285499],
		'达州':[107.494973,31.214199],
		'内江东':[105.073056,29.599462],
		'贵阳东':[106.709177,26.629907],
		'滨江西':[120.19237,30.187588],
		'贵阳东':[106.709177,26.629907],
		'万州':[108.413439,30.710054],
		'重庆东':[106.530635,29.544606],
		'八里':[118.339229,32.285499],
		'汉中':[107.045478,33.081569],
		'贵阳东':[106.709177,26.629907],
		'南阳':[112.542842,33.01142],
		'八里':[118.339229,32.285499],
		'黄岛港':[120.169541,36.005019],
		'隆昌':[105.252958,29.367869],
		'黄岛港':[120.169541,36.005019],
		'北郊':[113.085254,22.605038],
		'六盘水':[104.852087,26.591866],
		'黄岛港':[120.169541,36.005019],
		'杨浦':[121.535717,31.30451],
		'呼和浩特':[111.660351,40.828319],
		'八里':[118.339229,32.285499],
		'六盘水':[104.852087,26.591866],
		'北仑港':[121.886725,29.927878],
		'沈阳东':[123.432791,41.808645],
		'大窑湾港':[121.898386,39.003646],
		'北仑港':[121.886725,29.927878],
		'长春东':[125.313642,43.898338],
		'万州':[108.413439,30.710054],
		'北仑港':[121.886725,29.927878],
		'北仑港':[121.886725,29.927878],
		'北仑港':[121.886725,29.927878],
		'八里':[118.339229,32.285499],
		'东孚':[117.937334,24.562971],
		'内江东':[105.073056,29.599462],
		'乐山':[103.760824,29.600958],
		'黄岛港':[120.169541,36.005019],
		'金昌':[102.208126,38.516072],
		'柳州东':[109.422402,24.329053],
		'艮山门':[120.185499,30.280426],
		'八里':[118.339229,32.285499],
		'温州西':[120.690635,28.002838],
		'宁波北':[121.579006,29.885259],
		'呼和浩特':[111.660351,40.828319],
		'滨江西':[120.19237,30.187588],
		'贵港':[109.613708,23.103373],
		'无锡南':[120.305456,31.570037],
		'合肥南':[117.282699,31.866942],
		'合肥南':[117.282699,31.866942],
		'合肥南':[117.282699,31.866942],
		'艮山门':[120.185499,30.280426],
		'上海西':[121.487899,31.249162],
		'合肥南':[117.282699,31.866942],
		'宁波北':[121.579006,29.885259],
		'合肥南':[117.282699,31.866942],
		'遵义南':[106.93126,27.699961],
		'黄岛港':[120.169541,36.005019],
		'合肥南':[117.282699,31.866942],
		'汉西':[120.351788,30.925281],
		'万州':[108.413439,30.710054],
		'广元南':[105.819687,32.44104],
		'福州东':[119.330221,26.047125],
		'广元南':[105.819687,32.44104],
		'汉西':[120.351788,30.925281],
		'隆昌':[105.252958,29.367869],
		'艮山门':[120.185499,30.280426],
		'艮山门':[120.185499,30.280426],
		'余姚西':[121.152779,29.996457],
		'永康':[120.108684,28.940177],
		'永川':[105.880358,29.296488],
		'汉西':[120.351788,30.925281],
		'无锡南':[120.305456,31.570037],
		'合肥南':[117.282699,31.866942],
		'艮山门':[120.185499,30.280426],
		'贵阳东':[106.709177,26.629907],
		'遵义南':[106.93126,27.699961],
		'新港':[118.870321,32.167084],
		'贵阳东':[106.709177,26.629907],
		'秦皇岛南':[119.604368,39.945462],
		'合肥南':[117.282699,31.866942],
		'合肥南':[117.282699,31.866942],
		'贵阳东':[106.709177,26.629907],
		'永康':[120.108684,28.940177],
		'霞凝':[112.961066,28.344094],
		'杭州北':[120.219375,30.259244],
		'城厢':[118.954443,25.433375],
		'大朗':[113.948688,22.949973],
		'大窑湾港':[121.898386,39.003646],
		'无锡南':[120.305456,31.570037],
		'王家营西':[102.84491,24.930513],
		'乐山':[103.760824,29.600958],
		'杭州北':[120.219375,30.259244],
		'小塘西':[119.872295,31.774863],
		'玉溪南':[102.545068,24.370447],
		'王家营西':[102.84491,24.930513],
		'南昌北':[115.893528,28.689578],
		'城厢':[118.954443,25.433375],
		'巩义':[113.03959,34.703799],
		'城厢':[118.954443,25.433375],
		'王家营西':[102.84491,24.930513],
		'城厢':[118.954443,25.433375],
		'城厢':[118.954443,25.433375],
		'团结村':[109.014062,34.356359],
		'巩义':[113.03959,34.703799],
		'巩义':[113.03959,34.703799],
		'城厢':[118.954443,25.433375],
		'团结村':[109.014062,34.356359],
		'吴家山':[114.161891,30.637189],
		'闵行':[121.425024,31.093538],
		'新港':[118.870321,32.167084],
		'何家湾':[121.500852,31.335234],
		'大朗':[113.948688,22.949973],
		'西安西':[125.150149,42.986365],
		'团结村':[109.014062,34.356359],
		'王家营西':[102.84491,24.930513],
		'团结村':[109.014062,34.356359],
		'金华':[119.652576,29.102899],
		'金华':[119.652576,29.102899],
		'鲅鱼圈港':[122.104331,40.29517],
		'新港':[118.870321,32.167084],
		'万州':[108.413439,30.710054],
		'霍尔果斯':[81.318813,43.927754],
		'城厢':[118.954443,25.433375],
		'自贡':[104.776071,29.359157],
		'团结村':[109.014062,34.356359],
		'乐山':[103.760824,29.600958],
		'城厢':[118.954443,25.433375],
		'王家营西':[102.84491,24.930513],
		'鲅鱼圈港':[122.104331,40.29517],
		'乌北':[123.300739,46.824163],
		'王家营西':[102.84491,24.930513],
		'团结村':[109.014062,34.356359],
		'灵山':[109.147748,22.315716],
		'王家营西':[102.84491,24.930513],
		'城厢':[118.954443,25.433375],
		'大毕庄':[117.279068,39.208777],
		'团结村':[109.014062,34.356359],
		'乌西':[95.468519,37.844812],
		'团结村':[109.014062,34.356359],
		'无锡南':[120.305456,31.570037],
		'团结村':[109.014062,34.356359],
		'吴家山':[114.161891,30.637189],
		'吴家山':[114.161891,30.637189],
		'大窑湾港':[121.898386,39.003646],
		'团结村':[109.014062,34.356359],
		'大毕庄':[117.279068,39.208777],
		'乌北':[123.300739,46.824163],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'库尔勒':[85.709418,41.7055],
		'广元南':[105.819687,32.44104],
		'城厢':[118.954443,25.433375],
		'天水':[105.736932,34.584319],
		'盘古寺':[105.023113,29.972417],
		'乐山':[103.760824,29.600958],
		'城厢':[118.954443,25.433375],
		'盘古寺':[105.023113,29.972417],
		'团结村':[109.014062,34.356359],
		'北郊':[113.085254,22.605038],
		'阿克苏':[81.156013,40.349444],
		'鲅鱼圈港':[122.104331,40.29517],
		'宜宾北':[104.633019,28.769675],
		'城厢':[118.954443,25.433375],
		'团结村':[109.014062,34.356359],
		'桃浦':[121.359453,31.29092],
		'包头东':[109.846239,40.647119],
		'城厢':[118.954443,25.433375],
		'温州西':[120.690635,28.002838],
		'嘉峪关':[98.281635,39.802397],
		'天水':[105.736932,34.584319],
		'城厢':[118.954443,25.433375],
		'北仑港':[121.886725,29.927878],
		'阿克苏':[81.156013,40.349444],
		'城厢':[118.954443,25.433375],
		'绵阳':[104.705519,31.504701],
		'乌北':[123.300739,46.824163],
		'城厢':[118.954443,25.433375],
		'城厢':[118.954443,25.433375],
		'王家营西':[102.84491,24.930513],
		'艮山门':[120.185499,30.280426],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'温州西':[120.690635,28.002838],
		'王家营西':[102.84491,24.930513],
		'团结村':[109.014062,34.356359],
		'城厢':[118.954443,25.433375],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'六盘水':[104.852087,26.591866],
		'杨浦':[121.535717,31.30451],
		'城厢':[118.954443,25.433375],
		'大朗':[113.948688,22.949973],
		'乌北':[123.300739,46.824163],
		'上杭':[116.568669,25.126526],
		'新港(水)':[118.870321,32.167084],
		'自贡':[104.776071,29.359157],
		'大窑湾港':[121.898386,39.003646],
		'闵行':[121.425024,31.093538],
		'小塘西':[119.872295,31.774863],
		'大窑湾港':[121.898386,39.003646],
		'小塘西':[119.872295,31.774863],
		'巩义':[113.03959,34.703799],
		'艮山门':[120.185499,30.280426],
		'王家营西':[102.84491,24.930513],
		'城厢':[118.954443,25.433375],
		'王家营西':[102.84491,24.930513],
		'达州':[107.494973,31.214199],
		'大朗':[113.948688,22.949973],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'城厢':[118.954443,25.433375],
		'团结村':[109.014062,34.356359],
		'王家营西':[102.84491,24.930513],
		'乌西':[95.468519,37.844812],
		'吴家山':[114.161891,30.637189],
		'城厢':[118.954443,25.433375],
		'城厢':[118.954443,25.433375],
		'长春南':[125.313642,43.898338],
		'燕岗':[112.267585,21.877947],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'城厢':[118.954443,25.433375],
		'闵行':[121.425024,31.093538],
		'吴家山':[114.161891,30.637189],
		'黄岛港':[120.169541,36.005019],
		'杏林':[121.256605,28.604635],
		'团结村':[109.014062,34.356359],
		'平湖南':[121.105839,30.716529],
		'平湖南':[121.105839,30.716529],
		'金州':[121.956582,39.298619],
		'株洲北':[113.131695,27.827433],
		'圃田':[113.83077,34.741814],
		'新港':[118.870321,32.167084],
		'城厢':[118.954443,25.433375],
		'城厢':[118.954443,25.433375],
		'棠溪':[116.268336,27.862727],
		'眉山':[103.84143,30.061115],
		'自贡':[104.776071,29.359157],
		'大朗':[113.948688,22.949973],
		'大朗':[113.948688,22.949973],
		'大朗':[113.948688,22.949973],
		'达州':[107.494973,31.214199],
		'大朗':[113.948688,22.949973],
		'鲅鱼圈北':[122.176897,40.252584],
		'大毕庄':[117.279068,39.208777],
		'团结村':[109.014062,34.356359],
		'源潭':[112.984928,23.27313],
		'源潭':[112.984928,23.27313],
		'北仑港':[121.886725,29.927878],
		'北仑港':[121.886725,29.927878],
		'团结村':[109.014062,34.356359],
		'大朗':[113.948688,22.949973],
		'团结村':[109.014062,34.356359],
		'芦潮港':[121.856628,30.868678],
		'泉州东':[118.600362,24.901652],
		'大朗':[113.948688,22.949973],
		'新港':[118.870321,32.167084],
		'大红门':[116.423417,39.807916],
		'平湖南':[121.105839,30.716529],
		'海口南':[110.330802,20.022071],
		'无锡南':[120.305456,31.570037],
		'大朗':[113.948688,22.949973],
		'佛山东':[113.134026,23.035095],
		'塘沽':[117.649081,39.007936],
		'遵义北':[106.93126,27.699961],
		'团结村':[109.014062,34.356359],
		'百子湾':[116.4759,39.909107],
		'新港(水)':[118.870321,32.167084],
		'芦潮港':[121.856628,30.868678],
		'鲅鱼圈港':[122.104331,40.29517],
		'城厢':[118.954443,25.433375],
		'北仑港':[121.886725,29.927878],
		'城厢':[118.954443,25.433375],
		'阳春':[111.694449,22.223898],
		'平安驿':[102.003965,36.406412],
		'乌北':[123.300739,46.824163],
		'团结村':[109.014062,34.356359],
		'吴家山':[114.161891,30.637189],
		'王家营西':[102.84491,24.930513],
		'塘沽':[117.649081,39.007936],
		'上杭':[116.568669,25.126526],
		'南昌北':[115.893528,28.689578],
		'黄岛港':[120.169541,36.005019],
		'无锡南':[120.305456,31.570037],
		'乐山':[103.760824,29.600958],
		'王家营西':[102.84491,24.930513],
		'城厢':[118.954443,25.433375],
		'王家营西':[102.84491,24.930513],
		'鲅鱼圈港':[122.104331,40.29517],
		'王家营西':[102.84491,24.930513],
		'连云港港口':[119.173872,34.601549],
		'团结村':[109.014062,34.356359],
		'王家营西':[102.84491,24.930513],
		'鲅鱼圈北':[122.176897,40.252584],
		'鲅鱼圈港':[122.104331,40.29517],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'宁波北':[121.579006,29.885259],
		'王家营西':[102.84491,24.930513],
		'团结村':[109.014062,34.356359],
		'平湖南':[121.105839,30.716529],
		'团结村':[109.014062,34.356359],
		'王家营西':[102.84491,24.930513],
		'团结村':[109.014062,34.356359],
		'圃田':[113.83077,34.741814],
		'王家营西':[102.84491,24.930513],
		'王家营西':[102.84491,24.930513],
		'嘉峪关':[98.281635,39.802397],
		'平湖南':[121.105839,30.716529],
		'王家营西':[102.84491,24.930513],
		'辽阳':[123.172451,41.273339],
		'团结村':[109.014062,34.356359],
		'平湖南':[121.105839,30.716529],
		'平湖南':[121.105839,30.716529],
		'城厢':[118.954443,25.433375],
		'北仑港':[121.886725,29.927878],
		'平湖南':[121.105839,30.716529],
		'南昌北':[115.893528,28.689578],
		'城厢':[118.954443,25.433375],
		'吉林北':[126.564544,43.871988],
		'团结村':[109.014062,34.356359],
		'团结村':[109.014062,34.356359],
		'新港(水)':[118.870321,32.167084],
		'芦潮港':[121.856628,30.868678],
		'芦潮港':[121.856628,30.868678],
		'芦潮港':[121.856628,30.868678],
		'芦潮港':[121.856628,30.868678],
		'芦潮港':[121.856628,30.868678],
		'芦潮港':[121.856628,30.868678],
		'杨浦':[121.535717,31.30451],
		'棠溪':[116.268336,27.862727],
		'芦潮港':[121.856628,30.868678],
		'团结村':[109.014062,34.356359],
		'芦潮港':[121.856628,30.868678],
		'新港(水)':[118.870321,32.167084],
		'团结村':[109.014062,34.356359],
		'杨浦':[121.535717,31.30451],
		'杨浦':[121.535717,31.30451],
		'杨浦':[121.535717,31.30451],
		'杨浦':[121.535717,31.30451],
		'杨浦':[121.535717,31.30451],
		'大朗':[113.948688,22.949973],
		'杨浦':[121.535717,31.30451],
		'南昌北':[115.893528,28.689578],
		'南昌北':[115.893528,28.689578],
		'城厢':[118.954443,25.433375],
		'城厢':[118.954443,25.433375],
		'平湖南':[121.105839,30.716529],
		'芦潮港':[121.856628,30.868678],
		'阿拉山口境':[82.576354,45.172596],
		'鲅鱼圈港':[122.104331,40.29517],
		'黄岛港':[120.169541,36.005019],
		'新港(水)':[118.870321,32.167084],
		'城厢':[118.954443,25.433375],
		'城厢':[118.954443,25.433375],
		'城厢':[118.954443,25.433375],
		'南通东':[120.873801,32.014665],
		'平湖南':[121.105839,30.716529],
		'新港(水)':[118.870321,32.167084],
		'城厢':[118.954443,25.433375],
		'金港':[106.10085,30.821309],
		'鲅鱼圈港':[122.104331,40.29517],
		'平湖南':[121.105839,30.716529],
		'黄岛港':[120.169541,36.005019],
		'杜科':[118.080741,36.812812],
		'北仑港':[121.886725,29.927878],
		'黄岛港':[120.169541,36.005019],
		'鲅鱼圈北':[122.176897,40.252584],
		'京唐港':[119.003641,39.210719],
		'黄岛港':[120.169541,36.005019],
		'连云港港口':[119.173872,34.601549],
		'蜀山':[117.23128,31.838185],
		'源潭':[112.984928,23.27313],
		'平湖南':[121.105839,30.716529],
		'金港':[106.10085,30.821309],
		'公主岭':[124.685882,43.791826],
		'北仑港':[121.886725,29.927878],
		'金港':[106.10085,30.821309],
		'金港':[106.10085,30.821309],
		'万州':[108.413439,30.710054],
		'黄岛港':[120.169541,36.005019],
		'厦门港':[118.083094,24.456837],
		'黄岛港':[120.169541,36.005019],
		'平湖南':[121.105839,30.716529],
		'阿拉山口境':[82.576354,45.172596],
		'黄岛港':[120.169541,36.005019],
		'金港':[106.10085,30.821309],
		'青岛港':[120.330594,36.093814],
		'贵港':[109.613708,23.103373],
		'鲅鱼圈港':[122.104331,40.29517],
		'阿拉山口境':[82.576354,45.172596],
		'蒙自北':[103.516692,23.338657],
		'阿拉山口境':[82.576354,45.172596],
		'黄岛港':[120.169541,36.005019],
		'鲅鱼圈港':[122.104331,40.29517],
		'霍尔果斯境':[81.318813,43.927754],
		'塘沽':[117.649081,39.007936],
		'平湖南':[121.105839,30.716529],
		'金港':[106.10085,30.821309],
		'塘沽':[117.649081,39.007936],
		'呼和浩特南':[111.660351,40.828319],
		'万州':[108.413439,30.710054],
		'鲅鱼圈港':[122.104331,40.29517],
		'黄岛港':[120.169541,36.005019],
		'芦潮港':[121.856628,30.868678],
		'平湖南':[121.105839,30.716529],
		'鲅鱼圈港':[122.104331,40.29517],
		'鲅鱼圈港':[122.104331,40.29517],
		'北仑港':[121.886725,29.927878],
		'新港':[118.870321,32.167084],
		'平湖南':[121.105839,30.716529],
		'乌西':[95.468519,37.844812],
		'鲅鱼圈港':[122.104331,40.29517],
		'大毕庄':[117.279068,39.208777],
		'平湖南':[121.105839,30.716529],
		'北郊':[113.085254,22.605038],
		'黄岛港':[120.169541,36.005019],
		'东孚':[117.937334,24.562971],
		'福泉':[107.491217,26.777119],
		'平湖南':[121.105839,30.716529],
		'鲅鱼圈港':[122.104331,40.29517],
		'遵义北':[106.93126,27.699961],
		'防城港港':[108.351791,21.617398],
		'金港':[106.10085,30.821309],
		'塘沽':[117.649081,39.007936],
		'塘沽':[117.649081,39.007936],
		'塘沽':[117.649081,39.007936],
		'鲅鱼圈北':[122.176897,40.252584],
		'大朗':[113.948688,22.949973],
		'桃花村':[111.695937,40.736761],
		'芜湖西':[118.384108,31.36602],
		'桃花村':[111.695937,40.736761],
		'芜湖西':[118.384108,31.36602],
		'马龙':[103.513095,25.36884],
		'祥云':[100.778071,25.516673],
		'乐山':[103.760824,29.600958],
		'塘沽':[117.649081,39.007936],
		'广安':[106.758912,30.59925],
		'霍林河':[119.660475,45.537392],
		'万州':[108.413439,30.710054],
		'金港':[106.10085,30.821309],
		'南川':[107.177888,29.141686],
		'南川':[107.177888,29.141686],
		'祥云':[100.778071,25.516673],
		'蒙自北':[103.516692,23.338657],
		'咸阳':[108.707509,34.345373],
		'芦潮港':[121.856628,30.868678],
		'北仑港':[121.886725,29.927878],
		'芦潮港':[121.856628,30.868678],
		'锦州':[121.147749,41.130879],
		'萍乡':[113.859917,27.639544],
		'金港':[106.10085,30.821309],
		'金港':[106.10085,30.821309],
		'蒙自北':[103.516692,23.338657],
		'鲅鱼圈北':[122.176897,40.252584],
		'南川':[107.177888,29.141686],
		'鲅鱼圈北':[122.176897,40.252584],
		'曲靖':[103.782539,25.520758],
		'蒙自北':[103.516692,23.338657],
		'南川':[107.177888,29.141686],
		'苏州西':[120.619907,31.317987],
		'黄岛港':[120.169541,36.005019],
		'南川':[107.177888,29.141686],
		'南川':[107.177888,29.141686],
		'鲅鱼圈北':[122.176897,40.252584],
		'玉溪南':[102.545068,24.370447],
		'南星桥':[120.181501,30.226221],
		'桃花村':[111.695937,40.736761],
		'南川':[107.177888,29.141686],
		'大毕庄':[117.279068,39.208777],
		'蒙自北':[103.516692,23.338657],
		'玉溪南':[102.545068,24.370447],
		'鱼嘴':[106.766685,29.627154],
		'鱼嘴':[106.766685,29.627154],
		'凯里':[107.948239,26.631742],
		'鱼嘴':[106.766685,29.627154],
		'霍林河':[119.660475,45.537392],
		'泸州':[105.44397,28.89593],
		'咸水沽':[117.389531,38.994431],
		'鱼嘴':[106.766685,29.627154],
		'鲅鱼圈港':[122.104331,40.29517],
		'东孚':[117.937334,24.562971],
		'官港':[119.305892,26.002683],
		'蒙自北':[103.516692,23.338657],
		'桃花村':[111.695937,40.736761],
		'读书铺':[102.559621,24.950259],
		'官港':[119.305892,26.002683],
		'官港':[119.305892,26.002683],
		'祥云':[100.778071,25.516673],
		'咸水沽':[117.389531,38.994431],
		'金港':[106.10085,30.821309],
		'官港':[119.305892,26.002683],
		'咸水沽':[117.389531,38.994431],
		'官港':[119.305892,26.002683],
		'官港':[119.305892,26.002683],
		'南川':[107.177888,29.141686],
		'读书铺':[102.559621,24.950259],
		'咸水沽':[117.389531,38.994431],
		'咸水沽':[117.389531,38.994431],
		'西昌南':[102.117888,27.863377],
		'读书铺':[102.559621,24.950259],
		'读书铺':[102.559621,24.950259],
		'祥云':[100.778071,25.516673],
		'桃花村':[111.695937,40.736761],
		'官港':[119.305892,26.002683],
		'官港':[119.305892,26.002683],
		'乌北':[123.300739,46.824163],
		'团结村':[109.014062,34.356359],
		'南川':[107.177888,29.141686],
		'厦门港':[118.083094,24.456837],
		'小塘西':[119.872295,31.774863],
		'马龙':[103.513095,25.36884],
		'鱼嘴':[106.766685,29.627154],
		'咸水沽':[117.389531,38.994431],
		'咸水沽':[117.389531,38.994431],
		'西昌南':[102.117888,27.863377],
		'北海港':[109.097244,21.484306],
		'临沂':[118.340768,35.072409],
		'临沂':[118.340768,35.072409],
		'咸水沽':[117.389531,38.994431],
		'咸水沽':[117.389531,38.994431],
		'官港':[119.305892,26.002683],
		'官港':[119.305892,26.002683],
		'西昌南':[102.117888,27.863377],
		'咸水沽':[117.389531,38.994431],
		'大理东':[100.219209,25.693967],
		'鲅鱼圈港':[122.104331,40.29517],
		'临沂':[118.340768,35.072409]
};

var convertData = function (data1) {
    var res = [];
    for (var i = 0; i < data1.length; i++) {
        var geoCoord = geoCoordMap[data1[i].name];
        if (geoCoord) {
            res.push({
                name: data1[i].name,
                value: geoCoord,
                health: data1[i].health,
		        container_number:data1[i].container_number,
		        
                
            });
        }
    }
    return res;
}; 

option1 = {
    backgroundColor: '#404a59',
    title: {
        text: '中铁集装箱公司集装箱各地分布状态',
        left: 'center',
        textStyle: {
            color: '#FFF68F',
            fontWeight:'normal',
            fontSize:'20'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter:function(params){
        	var myseries = option1.series;
        	var res;
        	console.log(myseries);
        	console.log(params);
        	for(var j = 0; j < myseries.length; j++){
        	for(var i = 0; i < myseries[j].data.length; i++){
        		if(myseries[j].data[i].container_number==params.data.container_number){
        			res = '所在地:'+myseries[j].data[i].name + '<br>';
        			res += '集装箱箱号:'+myseries[j].data[i].container_number+'<br>';
        			res += '健康度:'+myseries[j].data[i].health;
        		}
        	}
        	}
        	return res;
        }
        	
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series : [                                
        {
            name: '',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data1),
            symbolSize: 10,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#FFF68F'
                }
            }
        },
        {
            name: '',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data2),
            symbolSize: 10,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'red'
                }
            }
        }
    ]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option1);