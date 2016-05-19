/*
Project Arceus 1.0 BETA
Made by iiAriGrandeEpix
GUI by idk
but credits to him :)
visit my site: www.mcpemoddeveloperforum.blogspot.com
*/
//lemme register some variables...
var switched = false;




var GUI;
      var menu;
      var exitUI;
      function dip2px(dips){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
      }
      function newLevel(){
clientMessage('§l§2Project Arceus by §5iiAriGrandeEpix');
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
      try{
      var layout = new android.widget.LinearLayout(ctx);
      layout.setOrientation(1);
      var menuBtn = new android.widget.Button(ctx);
      menuBtn.setText('Project Arceus');
      menuBtn.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      mainMenu();
      exit();
      }
      }));
      layout.addView(menuBtn);
      GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
      GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
      GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 10, 20);
      }catch(err){
      print('An error occured: ' + err);
      }
      }}));
      }
       function mainMenu(){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
      try{
      var menuLayout = new android.widget.LinearLayout(ctx);
      var menuScroll = new android.widget.ScrollView(ctx);
      var menuLayout1 = new android.widget.LinearLayout(ctx);
      menuLayout.setOrientation(1);
      menuLayout1.setOrientation(1);
      menuScroll.addView(menuLayout);
      menuLayout1.addView(menuScroll);
      var button = new android.widget.Button(ctx);

      button.setText('Fly');
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
Player.setCanFly(1);
}}))
      menuLayout.addView(button);
      //More buttons...
var buttonvarb = new android.widget.Button(ctx);
      buttonvarb.setText('Survival');
      buttonvarb.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
Level.setGameMode(0);
}}))
      menuLayout.addView(buttonvarb);
var buttonvar = new android.widget.Button(ctx);

      buttonvar.setText('Creative');
      buttonvar.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
Level.setGameMode(1);
}}))
      menuLayout.addView(buttonvar);

var variableuj = new android.widget.Button(ctx);

      variableuj.setText('Heal');
      variableuj.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
Player.setHealth(20);
}}))
      menuLayout.addView(variableuj);

var buttontt = new android.widget.Button(ctx);

      buttontt.setText('About');
      buttontt.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
clientMessage('Made by §5iiAriGrandeEpix');
clientMessage('§l§4You§fTube: §5§oiiAriGrandeEpix');
clientMessage('Version 1.1');

}}))
      menuLayout.addView(buttontt);

var buttontnt = new android.widget.Button(ctx);

      buttontnt.setText('Day');
      buttontnt.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
Level.setTime(8000);
clientMessage('Time setted to day!');
}}))
      menuLayout.addView(buttontnt);

var buttonttnt = new android.widget.Button(ctx);

      buttonttnt.setText('Night');
      buttonttnt.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
Level.setTime(18000);
clientMessage('Time setted to night!!');
}}))
      menuLayout.addView(buttonttnt);

var dayButton = new android.widget.Switch(ctx); 
dayButton.setTextColor(android.graphics.Color.WHITE);
dayButton.setText("Auto Update"); 
dayButton.setChecked(switched); 
dayButton.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
if(!switched){ 
switched = true; 
clientMessage('§2 Auto Update §f= §2On!');
var checkForUpdate=true;
var updateWindow=true;
}else{ 
switched = false; 
clientMessage('§2 Auto Update §f= §4Off');
var checkForUpdate=false;
var updateWindow=false;
} 
} 
}));
menuLayout.addView(dayButton);


var buttonttnta = new android.widget.Button(ctx);

      buttonttnta.setText('Project Arceus by iiAriGrandeEpix');
      buttonttnta.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
print('Why u clickin me?? lmao');
}}))
      menuLayout.addView(buttonttnta);



      menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
      menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
      }catch(error){
      print('An error occured: ' + error);
      }
      }}));
      }
      function exit(){
      var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctxe.runOnUiThread(new java.lang.Runnable({ run: function(){
      try{
      var xLayout = new android.widget.LinearLayout(ctxe);
      var xButton = new android.widget.Button(ctxe);
      xButton.setText('X');
      xButton.setTextColor(android.graphics.Color.WHITE);
      xButton.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      exitUI.dismiss();
      menu.dismiss();
      }
      }));
      xLayout.addView(xButton);
      exitUI = new android.widget.PopupWindow(xLayout, dip2px(40), dip2px(40));
      exitUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
      exitUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
      }catch(exception){
      print(exception);
      }
      }}));
      }
      function leaveGame(){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
      if(GUI != null){
      GUI.dismiss();
      GUI = null;
      }
      if(menu != null){
      menu.dismiss();
      menu = null;
      }
      if(exitUI != null){
      exitUI.dismiss();
      exitUI = null;
      }
      }}));
      }


var version="1.3a"; 
var newUpdate;
var updateMod; 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
 
 function checkVersion() {
    var r  = new java.lang.Runnable() {
        run: function() {
            try {
                var urls= new java.net.URL("https://raw.githubusercontent.com/iiAriGrandeEpix/Updates/master/Project%20Arceus%20AU");
                var check = urls.openConnection();
                check.setRequestMethod("GET");
                check.setDoOutput(true);
                check.connect();
                check.getContentLength();
                var script = check.getInputStream();
                var typeb = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                var byteCount = 0; 
                var checkedVersion;
                while((byteCount = script.read(typeb)) != -1) { 
                    checkedVersion = new java.lang.String(typeb, 0, byteCount);               
                }
                newUpdate = checkedVersion;
                if(version+"\n" != checkedVersion) {
                    clientMessage("§aNew version! " + newUpdate);
                    updateWindow=true;
                }
                else if(version+"\n"==checkedVersion){
                clientMessage("§aNo updates available");
                }
            }
            catch(err) {
                clientMessage("§aUpdate check failed ");
                if(err=="JavaException: java.net.UnknownHostException: raw.githubusercontent.com") {
                                clientMessage("§aNo internet connection.");
                            }
                            else {
                                clientMessage("§aError: \n" + err);
                            } 
            }
        }
    }
    var threadt = new java.lang.Thread(r);
    threadt.start();
}
function updateVersion() {
    try {
        var upd = new android.app.AlertDialog.Builder(ctx);
        upd.setTitle("New version available!");
        upd.setMessage("An update of Project Arceus was found! ,Would you like to update it now? Current version: " + version + "\nNew version: " + newUpdate);
        upd.setNegativeButton("Later", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
            dialog.dismiss(); 
   }
        });
        upd.setPositiveButton("Update", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
                var ru  = new java.lang.Runnable() {
                    run: function() {
                        try {
                            var urls = new java.net.URL("https://raw.githubusercontent.com/iiAriGrandeEpix/Updates/master/Project%20Arceus%20AU");
                            var check = urls.openConnection();
                            check.setRequestMethod("GET");
                            check.setDoOutput(true);
                            check.connect();
                            check.getContentLength();
                            var script = check.getInputStream();
                            var typeb = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                            var byteCount = 0;
                            while((byteCount = script.read(typeb)) != -1) { 
                                updateMod += new java.lang.String(typeb, 0, byteCount);               
                            }
                            var modpeFolder = ctx.getDir("modscripts", 0);
                            var modpeFile = new java.io.File(modpeFolder, "Project Arceus by iiAriGrandeEpix.js");
                            var update = new java.io.PrintWriter(modpeFile);
                            update.write(updateMod);
                            update.flush();
                            update.close();
                             
                            try {
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, false);
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, true);
                                clientMessage("Downloaded and enabled!");
                                   
                            }
                            catch(err) {
                                clientMessage("§aError: \n" + err);
                            }
                        }
                        catch(err) {
                            clientMessage("§aError: \n" + err);
                        }
                    }
                }
                var threadt = new java.lang.Thread(ru);
                threadt.start();
            }
        });
        var dialog = upd.create();
        dialog.show() 
    }
    catch(err) {
        clientMessage("§aError: \n" + err);
    }
}

