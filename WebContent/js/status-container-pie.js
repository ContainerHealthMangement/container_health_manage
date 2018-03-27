document.write("<script language='javascript' src='../../AdminLTE-2.4.0-rc/bower_components/jquery/dist/jquery.min.js'></script>");


var myChart = echarts.init(document.getElementById('container-percentages'));
var percentage_health = [];
loadHealth_grade(percentage_health);
var great = percentage_health[0];
var good = percentage_health[1]+percentage_health[2];
var bad = percentage_health[3];
option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        data: ['优', '良', '危险', '健康等级I', '健康等级II', '健康等级III', '健康等级IV'],
	        textStyle:{
	        	color:'white'
	        }
	    },
	    color:['green','#F0E68C','#FF0000','#ADFF2F','#228B22','#3CB371','#FF0000'],
	    series: [{
	        name: '访问来源',
	        type: 'pie',
	        selectedMode: 'single',
	        radius: [0, '33%'],
	        center:['58%','50%'],
	        label: {
	            normal: {
	                position: 'inner'
	            }
	        },
	        labelLine: {
	            normal: {
	                show: false
	            }
	        },
	        data: [{
	            value: great,
	            name: '优',
	            selected: true
	        }, {
	            value: good,
	            name: '良'
	        }, {
	            value: bad,
	            name: '危险'
	        }]
	    }, {
	        name: '访问来源',
	        type: 'pie',
	        radius: ['40%', '50%'],
	        center:['58%','50%'],
	        data: [ {
	            value: percentage_health[0],
	            name: '健康等级I'
	        }, {
	            value: percentage_health[1],
	            name: '健康等级II'
	        }, {
	            value:percentage_health[2],
	            name: '健康等级III'
	        }, {
	            value: percentage_health[3],
	            name: '健康等级IV'
	        }]
	    }]
	};
myChart.setOption(option);