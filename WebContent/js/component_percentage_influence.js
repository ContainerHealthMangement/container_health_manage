document.write("<script language='javascript' src='../../AdminLTE-2.4.0-rc/bower_components/jquery/dist/jquery.min.js'></script>");

var myChart = echarts.init(document.getElementById('component_percentage'));
option_health = {
	    title : {
	        text: '集装箱部件影响健康占比',
	        subtext: '',
	        x:'center',
	        textStyle:{
	            fontWeight:'normal',
	            color:'#FFF68F'
	        }
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "部件对整体重要性 <br/>{b} : {d}%"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
	    },
	    series : [
	        {
	            name: '访问来源',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:5, name:'把手'},
	                {value:20, name:'胶合木地板'},
	                {value:15, name:'叉槽侧板'},
	                {value:15, name:'地板'},
	                {value:15, name:'门舌板'},
	                {value:5, name:'标记'},
	                {value:15, name:'铰链板'},
	                {value:10, name:'顶波波板'},
	                {value:15, name:'侧薄板'},
	                {value:15, name:'门板'},
	                {value:10, name:'大导向架'},
	                {value:5, name:'锁头'},
	                {value:5, name:'J杆'},
	                {value:5, name:'前端板'},
	                {value:5, name:'其他'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};


myChart.setOption(option_health);