document.write("<script language='javascript' src='../../AdminLTE-2.4.0-rc/bower_components/jquery/dist/jquery.min.js'></script>");

var myChart = echarts.init(document.getElementById('component-percentage'));
option_health = {
	    title: {
	        text: '集装箱外部影响因素',
	        textStyle: {
                color: '#FFF68F',
                fontWeight:'normal',
                fontSize:'16'
            }
	    },
	    tooltip: {},
	    legend: {
	        data: ['湿气', '物理挤压','货品种类','货运距离'],
	        top:25,
	        textStyle:{
	        	color:'white'
	        }
	     
	    },
	    radar: {
	        // shape: 'circle',
	        name: {
	            textStyle: {
	                color: '#fff',
	                backgroundColor: '#999',
	                borderRadius: 3,
	                padding: [3, 10]
	           }
	        },
	        indicator: [
	           { name: '磨损性影响', max: 100},
	           { name: '腐蚀性影响', max: 100},
	           { name: '碰撞性影响', max: 100},
	           { name: '结构性影响', max: 100},
	           { name: '严密性影响', max: 100},
	        ],
	        center:['50%','60%']
	    },
	    series: [{
	        name: '预算 vs 开销（Budget vs spending）',
	        type: 'radar',
	        
	        // areaStyle: {normal: {}},
	        data : [
	            {
	                value : [20, 60, 0, 10, 0],
	                name : '湿气'
	            },
	             {
	                value : [30, 0, 80, 60, 40],
	                name : '物理挤压'
	            },
	            {
	                value : [30, 40, 30, 50, 30],
	                name : '货品种类'
	            },
	            {
	                value : [80, 0, 20, 10, 10],
	                name : '货运距离'
	            }
	        ]
	    }]
	};


myChart.setOption(option_health);