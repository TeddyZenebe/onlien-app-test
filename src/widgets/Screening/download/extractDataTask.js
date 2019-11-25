// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/Evented jimu/BaseWidget esri/tasks/Geoprocessor dojo/Deferred esri/tasks/FeatureSet esri/graphic".split(" "),function(g,c,h,k,l,m,d,n){return g([k,h],{baseClass:"jimu-widget-screening-extract-data-task",_extractDataTaskGPService:null,choiceList:{filegdb:"File Geodatabase - GDB - .gdb",shapefile:"Shapefile - SHP - .shp"},constructor:function(a){this._extractDataTaskGPService=null;this.choiceList={filegdb:"File Geodatabase - GDB - .gdb",shapefile:"Shapefile - SHP - .shp"};
c.mixin(this,a)},startup:function(){this._extractDataTaskGPService=new l(this.url);this._init()},_init:function(){var a=new m,e=new n,f=[],b=new d;e.geometry=this.aoi.geometry;f.push(e);b=new d;b.features=f;b.displayFieldName="";b.geometryType="esriGeometryPolygon";b.spatialReference=this.map.spatialReference;b.fields=[];b.exceededTransferLimit=!1;this._extractDataTaskGPService.submitJob({Area_of_Interest:b,Feature_Format:this.choiceList[this.fileFormat]},c.hitch(this,function(a){this._extractDataTaskGPService.getResultData(a.jobId,
"Output_Zip_File",c.hitch(this,this.onGPTaskSuccess),c.hitch(this,this.onGPTaskFailed))}),c.hitch(this,this.onGPTaskStatusUpdate),c.hitch(this,this.onGPTaskFailed));return a.promise},onGPTaskSuccess:function(a){this.emit("onGPTaskSuccess",a.value.url)},onGPTaskStatusUpdate:function(a){this.emit("onGPTaskStatusUpdate",a)},onGPTaskFailed:function(a){this.emit("onGPTaskFailed",a)}})});