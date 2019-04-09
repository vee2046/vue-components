<template>
	<div>
		<h3>表格{{time}}</h3>
		<vue-table :path="route()"        
		    :error-handler="myErrorHandler"
		    :i18n="myI18n" 
		    :id="'1'"      
		    ref="table"/> 
	</div>
</template>
<script>
	import axios from 'axios';
	import Toastr from '@enso-ui/toastr/bulma';
	import ToastrPlugin from '@enso-ui/toastr';
	import { VueTable, EnsoTable } from '@enso-ui/tables/bulma';
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
	window.axios = axios;
	export default {
		//导入组件
    	components:{VueTable}
		,name: 'Table'
		,props: {}//数据绑定
	    ,data:function(){
	        return {
	            time:new Date()
	        }
	    }
	    //初始执行
        ,created:function(){}
        ,mounted:function(){
            //首先执行
        }
        //功能绑定
        ,methods:{
    		myErrorHandler(){
    			console.log(arguments);
    		}
    		,route(){
    			return 'http://localhost:3000/api';
    			return 'http://localhost:3000/api?name=table';
    		}
    		,myI18n(){}
    	}
	}
</script>