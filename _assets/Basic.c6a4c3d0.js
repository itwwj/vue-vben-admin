import{a as e,r as i,i as t,o,j as r,k as s,w as a,p as n,n as d}from"./index.3e933661.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.2903566a.js";import"./index.caa9c205.js";import"./omit.e1a1ead6.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.cd4888b0.js";import"./CheckOutlined.8996393f.js";import"./index.54ad7dca.js";import"./index.e160a50a.js";import"./colors.f10ffa37.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.e195d265.js";import"./index.419327a5.js";import"./UpOutlined.de078ead.js";import"./LeftOutlined.1d5ef8d8.js";import"./DownOutlined.aa15d04e.js";import"./index.19eec487.js";import"./index.d8b61c9c.js";import"./index.1071ba0c.js";import"./zh_CN.0242bd16.js";import"./index.750cd074.js";import"./index.1b9dbfc8.js";import"./CaretDownFilled.2517991b.js";import"./CheckOutlined.76629acb.js";import"./CloseOutlined.09b38309.js";import{s as p}from"./EditTableHeaderIcon.f6762d90.js";import"./index.b83eb5e2.js";import"./index.243e732a.js";import"./LeftOutlined.a332afde.js";import"./functional.b99ed96c.js";import"./RightOutlined.5716f2a4.js";import"./useTimeout.7f3ab19b.js";import"./useDebounce.388ff7a2.js";import"./useEventListener.056eaf86.js";import"./useBreakpoint.c3bb46ed.js";import"./resizeEvent.374e9514.js";import"./domUtils.f290d5ee.js";import"./useExpose.a4960c9f.js";import"./index.0e9d4f93.js";import"./useWindowSizeFn.6fb915be.js";import"./uuid.40269c00.js";import"./download.9a124c3a.js";import"./useForm.b39f2118.js";import"./useFullScreen.0789ca88.js";import"./index.b5e81656.js";import{getBasicColumns as l,getBasicData as m}from"./tableData.94069033.js";var c=e({components:{BasicTable:p},setup(){const e=i(!1),t=i(!1),o=i(!0),r=i(!0);return{columns:l(),data:m(),canResize:e,loading:t,striped:o,border:r,toggleStriped:function(){o.value=!o.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){t.value=!0,setTimeout((()=>{t.value=!1}),3e3)},toggleBorder:function(){r.value=!r.value}}}});const u={class:"p-4"},j=n(" 开启loading ");c.render=function(e,i,p,l,m,c){const f=t("a-button"),b=t("BasicTable");return o(),r("div",u,[s(b,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,pagination:{pageSize:20}},{toolbar:a((()=>[s(f,{type:"primary",onClick:e.toggleCanResize},{default:a((()=>[n(d(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:e.toggleBorder},{default:a((()=>[n(d(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:e.toggleLoading},{default:a((()=>[j])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:e.toggleStriped},{default:a((()=>[n(d(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered"])])};export default c;