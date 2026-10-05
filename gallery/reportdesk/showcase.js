const views = {
  editor: {title:'数据和品牌，一起成为报告。',copy:'左侧切换客户，中央预览报告，右侧调整品牌、指标和说明。保存后进入审核。',alt:'ReportDesk 三栏报告编辑器，显示 LUMA 当前 D3 数据与重新审核提示'},
  mapping: {title:'让错误停在导入之前。',copy:'中文列映射、93 行数据预览与结构校验。缺字段、重复记录或客户混入会明确提示并阻止导入。',alt:'实际上传中文 CSV 后的字段映射和校验通过界面'},
  approval: {title:'批准的是一份确定的内容。',copy:'报告经历退回、修订和重新提交，批准时保存输入 D2 和报告修订 r7，形成独立 V1。',alt:'报告审核页，显示已批准 V1、数据版本、活动记录和口径核对'},
  snapshot: {title:'新数据进来，历史报告保持原样。',copy:'当前草稿已更新至 D3，先前批准 V1 仍保留 66,240 元花费和 345,966 元收入，快照哈希一致。',alt:'只读 V1 报告保留 D2 数据、原指标和快照哈希'}
};
const tabs=[...document.querySelectorAll('[data-view]')],image=document.getElementById('product-image');
function selectView(tab){const key=tab.dataset.view,v=views[key];tabs.forEach(t=>{t.setAttribute('aria-selected',String(t===tab));t.tabIndex=t===tab?0:-1;});document.getElementById('product-panel').setAttribute('aria-labelledby',tab.id);document.getElementById('view-title').textContent=v.title;document.getElementById('view-copy').textContent=v.copy;image.src=`showcase/${key}.png`;image.alt=v.alt;image.removeAttribute('height');document.getElementById('full-image').href=image.src;document.querySelector('.screen-window').scrollTop=0;}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectView(tab));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(index+1)%tabs.length;if(e.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();tabs[next].focus();selectView(tabs[next]);}});});
const intro='ReportDesk 客户报告与审核工作台｜报表自动化与品牌定制\n面向营销代理商月报交付，完成 CSV 导入校验、字段映射、指标计算、品牌报告编辑及审核交付流程；通过不可变批准快照实现数据变更后重新审核与历史导出一致，交付可运行应用、源码、样例、真实 PDF 和验收材料。';
document.getElementById('copy-case').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(intro);document.getElementById('copy-status').textContent='项目简介已复制';}catch{document.getElementById('copy-text').value=intro;document.getElementById('copy-dialog').showModal();document.getElementById('copy-text').select();document.getElementById('copy-status').textContent='可在弹窗中选择并复制';}});
window.feather?.replace({'aria-hidden':'true'});
