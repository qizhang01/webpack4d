import * as React from 'react'
import { Panel } from '@/components/Panel'
import { Button } from 'antd'
import XLSX from 'xlsx'

const PageSub2: React.FC = () => {

    function download(dataURL: string, name: string):void {
        let link = document.createElement("a");
        link.download = name;
        link.setAttribute("href",dataURL);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    function create_qrcode(id:string, url: string): void{

    };
    
    function createDiv(id: string){
        let div = document.createElement("div");
        div.setAttribute("id",id);
        document.querySelector('#section')!.appendChild(div)
    };

    return (
        <Panel>
            <section id="section"></section>
            <label
                className="ant-btn ant-btn-primary"
                style={{
                    display: 'inline-block',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '200px',
                }}
            >
                打开excel文件
                <input id="import" type="file" style={{ display: 'none' }} />
            </label>
        </Panel>
    )
}

export default PageSub2



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Title</title>
//     <style>
//         div{
//             display: inline-block;
//             margin: 10px;
//         }
//         input {
//             margin-top: 10px;
//         }
//     </style>
// </head>
// <body>
//     <section id="section"></section>
//     <input id="import" type="file"> 
// </body>
// <script src="http://libs.baidu.com/jquery/1.9.1/jquery.min.js"></script>
// <script src="https://cdn.bootcss.com/jquery.qrcode/1.0/jquery.qrcode.min.js"></script>
// <script src="https://cdn.bootcss.com/xlsx/0.11.5/xlsx.core.min.js"></script>
// <script type="application/javascript">

//     function download(dataURL, name) {
//         let link = document.createElement("a");
//         link.download = name;
//         link.setAttribute("href",dataURL);
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         delete link;
//     };

//     function create_qrcode(id,url){
//         //中文ULR生成方法 encodeURI转码
//         $(`#${id}`).qrcode(encodeURI(url));
//         setTimeout(
//             function (){
//                 let dataUrl = document.querySelector(`#${id}`).querySelector('canvas').toDataURL("image/png");
//                 download(dataUrl, `${id}.png`);
//             }
//         ,1000);
//     }
    
//     function createDiv(id){
//         let div = document.createElement("div");
//         div.setAttribute("id",id);
//         document.querySelector('#section').appendChild(div);
//     }

//     $('#import').change(function(e) {
//         let data, workbook, items = [], fromTo = '', baseUrl = 'https://www.gaodun.com/';
//         const files = e.target.files;
//         let fileReader = new FileReader();
//         // 以二进制方式打开文件
//         fileReader.readAsBinaryString(files[0]);
      
//         fileReader.onload = function(ev) {
//             try {
//                 data = ev.target.result
//                 workbook = XLSX.read(data, {
//                     type: 'binary'
//                 }) // 以二进制流方式读取得到整份excel表格对象
//             } catch (e) {
//                 alert('文件类型不正确');
//                 return;
//             }
//             // 表格的表格范围，可用于判断表头是否数量是否正确
//             //  fromTo = '';
//             // 遍历每张表读取
//             for (let sheet in workbook.Sheets) {
//                 if (workbook.Sheets.hasOwnProperty(sheet)) {
//                     // fromTo = workbook.Sheets[sheet]['!ref'];
//                     items = items.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
//                     // break; // 如果只取第一张表，就取消注释这行
//                 }
//             }

//             //循环生成qrcode并自动下载到文件夹
//             items.forEach(el=>{
//                 const org = el['单位']
//                 const code = el['编号']
//                 const number = el['代码']
//                 const url = `${baseUrl}?org=${org}&&code=${code}&&number=${number}`
//                 createDiv(org)
//                 create_qrcode(org,url)
//             })
//         };
//     });
// </script>
// </html>