if (typeof (SiebelAppFacade.CustomPostload) == "undefined") {
    Namespace('SiebelAppFacade.CustomPostload');

	(function(){
        SiebelApp.EventManager.addListner( "postload", OnPostload, this );
		function OnPostload( ){		
			try{
				$("#_sweappmenu").css({"background":"grey none repeat-x 0 bottom"});
				$(".siebui-toolbar-enable").css({"background-color":"grey", "border-right" : "none"});
				$(".siebui-msgbar").css({"background-color":"grey", "border-right":"none"});
				$(".siebui-search-toolbar-options").css({"background-color":"grey", "border-right":"none"});
				$(".siebui-search-bar").css({"background-color":"grey", "border-right":"none"});
  				$(".ui-menubar .ui-menubar-item .ui-menubar-link").css({"border-left":"none" , "border-right":"none"});
				$(".ui-menu .ui-menu-item a").css({"background-color":"grey" , "border":"none" , "border-radius":"0px"});
				$("#_swethreadbar").css({"background":"lightblue"});
				$("#s_sctrl_tabScreen").css({"background":"lightblue"});
				$(".siebui-button-toolbar").hide();
				$(".siebui-nav-tabView").hide();
				function mainMenuRedraw(itemName, itemPic){
					$("[data-caption = '"+itemName+"']").children(".ui-button").children(".ui-button-text").html("<img src='"+itemPic+"' class='ToolbarButtonOn'>");
					$("[data-caption = '"+itemName+"']").children(".ui-button").children(".ui-button-text").children("img").css({"height":"40px", "width":"40px"});
				}
				mainMenuRedraw('&File','images/custom/home.png');
				mainMenuRedraw('&Edit','images/custom/edit.png');
				mainMenuRedraw('&View','images/custom/view.png');
				mainMenuRedraw('&Navigate','images/custom/navigate.png');
				mainMenuRedraw('&Query','images/custom/query.png');
				mainMenuRedraw('&Tools','images/custom/tools.png');
				mainMenuRedraw('&Help','images/custom/help.png');
				$(".siebui-view-navs .siebui-nav-tabScreen .ui-tabs-nav li a").css({"background-color":"lightblue","border-color":"lightblue","border-radius":"0 0 0 0"});
				$(".siebui-view-navs .siebui-nav-tabScreen .ui-tabs-nav .ui-tabs-active a").css({"background-color":"white", "border-color":"white", "color":"black"});
				$(".ui-menubar .ui-menubar-item:first-child").css({"border-left" : "none"});
				$(".ui-menubar .ui-menubar-item:last-child").css({"border-right" : "none"});
				$(".siebui-crumb").css({"color":"black"});
				
				// перерисовка табов
				let tabPath = $(".siebui-view-navs").children(".siebui-nav-tabScreen").children(".ui-tabs-nav").children(".siebui-active-navtab");
				tabPath.children().html(tabPath.children().html()+" ▼");
				tabPath.hover( 
					function() {
						$(".siebui-nav-tabView").show();
					}
				);
				$(".siebui-nav-tab").hover(
					function() {},
					function() {
						$(".siebui-nav-tabView").hide();
					}
				);
				
				// отрисовка кнопки
				let btnDrawCheck = $("li").is("#customSitemap");
				if (!btnDrawCheck) {
					$("#s_0").append('<li data-caption="&sitemapCustom" class="siebui-appmenu-item  ui-menubar-item" id="customSitemap" role="presentation" style="border-right: none;"><a href="javascript:void(0)" class="ui-button ui-widget ui-button-text-only ui-menubar-link" tabindex="-1" role="menuitem" aria-haspopup="true" style="border-left: none; border-right: none;"><span class="ui-button-text"><img src="images/custom/sitemap.png" class="ToolbarButtonOn" style="height: 40px; width: 40px;"></span></a></li>');
					}
				$("#customSitemap").click(
					function(){}
				);
				$("#customSitemap").hover(function(){
					$("#customSitemap").children("a").addClass("ui-state-hover");
				},
				function(){
					$("#customSitemap").children("a").removeClass("ui-state-hover");
				}
				);
			}	
			catch(error)
            {
                SiebelJS.Log("Error caught in postload: "+error);
            }	
		console.log("postload done");	
		}
	}());
}