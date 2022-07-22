function GetQueryString(name){
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
}
function reucqwhc(hctype, more, user, adkey=null) {
	// 1 页面浏览  2 表单   3微信复制
	if(hctype == "" || hctype == null || hctype == undefined){
			hctype = 1;
	}
	if(more == "" || more == null || more == undefined){
			more = 1;
	}
	if(user == "" || user == null || user == undefined){
			alert('user异常');
	}
	
	var link = "";
	var uctrackid =  GetQueryString('uctrackid');
	console.log(uctrackid)
	if(uctrackid == "" || uctrackid == null || uctrackid == undefined){	
		console.log('uctrackid为空!');
		return false;
	}else{
		console.log('获取uctrackid:'+uctrackid+'成功!');
	}  	
	
	var urls =  window.location.protocol+'//'+window.location.host+window.location.pathname;
	
	link = urls+"?uctrackid="+uctrackid;
  $.ajax({
    type: "POST",
    url: "https://fy.xsmaofa.com/api/qywxv1/user_contact_uc",
    data: {
	  clickid:link,
	  hctype: hctype,
	  more:more,
	  user:user,
    },
    success: function (res) {
		console.log(res.code);
      if (res.code == 200) {
		  console.log(res.qr_code);
		  console.log(adkey);
		  restaticxcxlink(adkey, res.qr_code);
		  console.log('->生成qr_code成功!');
      } else {
		console.log(res);
        console.log('生成异常!!!');
      }
    },
    error: function (data) {
      console.log('ajax error!');
    }
  })
}

function restaticxcxlink(adkey,qrcode='qrcode') {
	if(qrcode == "" || qrcode == null || qrcode == undefined){
			qrcode = "qrcode";
	}
	
	var clickid = "";
	clickid =   GetQueryString('uctrackid') ;
	if(clickid == "" || clickid == null || clickid == undefined){	
		console.log('clickid为空!');
		return false;
	}else{
		console.log('获取clickid:'+clickid+' 成功!');
	}
  $.ajax({
    type: "POST",
    url: "https://wxz.xsmaofa.com/index/wxsfonlineuc/relink",
    data: {
      adkey: adkey,
	  clickid:clickid,
	  qrcode:qrcode,
    },
    success: function (res) {
      if (res.code == 402 || res.code == 403) {
		console.log('xcx link fail');
      } else if(res.code == 200){
		    console.log("xcx link success->"+ res.data);
			var xcxlink = res.data;
			// return this.xcxlink=xcxlink;
			window.location.href=xcxlink;
	  }else{
		    console.log("xcx link noknown");
	  }
       
    },
    error: function (data) {
      console.log('rexcxtx ajax error!');
    }
  })
}
export {  
	restaticxcxlink,
	reucqwhc,
	GetQueryString
} 