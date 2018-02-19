import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Data from './Data';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// const defaultState = {value: 0};


// const reducer = (state = defaultState, action) => {
//   if(action.type === "ADD") return {value: state.value + 1};
//   return state;
// }

const defaultState = {
  ChinaStone : [
    { id : 1,  optionEn : "Indian White", optionVn : "Ấn Trắng", Origin : "China",OriginVn : "Trung Quốc",type : "china", src :"../image/China/Indian White 1.jpg", description :"Indian white 1"},
    { id : 2,  optionEn : "Indian White", optionVn : "Ấn Trắng", Origin : "China",OriginVn:"Trung Quốc", type : "china", src :"../image/China/Indian White 2.jpg", description :"Indian white 2"},
    { id : 3,  optionEn : "Indian White", optionVn : "Ấn Trắng", Origin : "China",OriginVn:"Trung Quốc", type : "china", src :"../image/China/Indian White 3.jpg", description :"Indian white 3"},
    { id : 4,  optionEn : "Indian White", optionVn : "Ấn Trắng", Origin : "China",OriginVn:"Trung Quốc", type : "china", src :"../image/China/Indian White 4.jpg", description :"Indian white 4"},
    { id : 5,  optionEn : "Indian White", optionVn : "Ấn Trắng", Origin : "China",OriginVn:"Trung Quốc", type : "china", src :"../image/China/Indian White 5.jpg", description :"Indian white 5"} 
  ],
  Egypt1      : [
    { id : 6,  optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Fardy-Green.jpg", description :"Fardy-Green"},
    { id : 7,  optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Fardy-Yellow.jpg", description :"Fardy-Yellow"},
    { id : 8,  optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Forsan.jpg", description :"Forsan"},
    { id : 9,  optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gendola-1.jpg", description :"Gendola-1"},
    { id : 10, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gendola-2.jpg", description :"Gendola-2"},
    { id : 11, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gray.jpg", description :"Gray"},
    { id : 12, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Red Aswan Granite Slabs17.JPG", description :"Red Aswan Granite"},
    { id : 13, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Halayb White Granite Slabs19 (1).JPG", description :"Halay White"},
    { id : 14, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Gendola (1).jpg", description :"Gendola (1)"},
    { id : 15, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Granite samples.jpg", description :"Granite samples"},
    { id : 16, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Nervertity.jpg", description :"Nervertity"},
    { id : 17, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/halayeb-white.jpg", description :"halayeb-white"},
    { id : 18, optionEn : "Egyptian Granite", optionVn : "Granite Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Granite Ai Cập/Verdy Granite Slabs10 (1).JPG", description :"Verdy Granite Slabs10 (1)"},

  ],
  Egypt2      : [
    { id : 19, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra (8).jpg", description :"Glala extra (8)", Anxinhđep : "hihi"},
    { id : 20, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra (9).jpg", description :"Glala extra (9)", Anxinhđep : "hihi"},
    { id : 21, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra (10).jpg", description :"Glala extra (10)", Anxinhđep : "hihi"},
    { id : 22, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra high quality.jpg", description :"Glala extra high quality", Anxinhđep : "hihi"},
    { id : 23, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra.jpg", description :"Glala extra", Anxinhđep : "hihi"},
    { id : 24, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (4).JPG", description :"Royal creama (4)", Anxinhđep : "hihi"},
    { id : 25, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (6).JPG", description :"Royal creama (6)", Anxinhđep : "hihi"},
    { id : 26, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (9).JPG", description :"Royal creama (9)", Anxinhđep : "hihi"},
    { id : 27, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (14).JPG", description :"Royal creama (14)", Anxinhđep : "hihi"},
    { id : 28, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (19).JPG", description :"Royal creama (19)", Anxinhđep : "hihi"},
    { id : 29, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal Gray Polished slabs 2cm04.JPG", description :"Royal Gray Polished slabs 2cm04", Anxinhđep : "hihi"},
    { id : 30, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal Gray Polished slabs 2cm06.JPG", description :"Royal Gray Polished slabs 2cm06", Anxinhđep : "hihi"},
    { id : 31, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal Gray Polished slabs 2cm09 (9).JPG", description :"Royal Gray Polished slabs 2cm09 (9)", Anxinhđep : "hihi"},
    { id : 32, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal Gray Polished slabs 2cm13.JPG", description :"Royal Gray Polished slabs 2cm13", Anxinhđep : "hihi"},
    { id : 33, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/Royal Gray Polished slabs 2cm31.JPG", description :"Royal Gray Polished slabs 2cm31", Anxinhđep : "hihi"},
    { id : 34, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sinai pearle (2).JPG", description :"sinai pearle (2)", Anxinhđep : "hihi"},
    { id : 35, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sinai pearle (3).JPG", description :"sinai pearle (3)", Anxinhđep : "hihi"},
    { id : 36, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sinai pearle (5).JPG", description :"sinai pearle (5)", Anxinhđep : "hihi"},
    { id : 37, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sinai pearle (6).JPG", description :"sinai pearle (6)", Anxinhđep : "hihi"},
    { id : 38, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sinai pearle.JPG", description :"sinai pearle", Anxinhđep : "hihi"},
    { id : 39, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sunny (2).JPG", description :"sunny (2)", Anxinhđep : "hihi"},
    { id : 40, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sunny (5).JPG", description :"sunny (5)", Anxinhđep : "hihi"},
    { id : 41, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sunny (8).JPG", description :"sunny (8)", Anxinhđep : "hihi"},
    { id : 42, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sunny (9).JPG", description :"sunny (9)", Anxinhđep : "hihi"},
    { id : 43, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/sunny.JPG", description :"sunny", Anxinhđep : "hihi"},
    { id : 44, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/travin (2).JPG", description :"travin (2)", Anxinhđep : "hihi"},
    { id : 45, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/travin (3)_1.JPG", description :"", Anxinhđep : "hihi"},
    { id : 46, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/travin (3).JPG", description :"travin (3)", Anxinhđep : "hihi"},
    { id : 47, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/travin (4).JPG", description :"travin (4)", Anxinhđep : "hihi"},
    { id : 48, optionEn : "Egyptian Marble", optionVn : "Marble Ai Cập", Origin : "Egypt",OriginVn:"Ai Cập", type : "egypt", src :"../image/Egypt/Marble Ai Cap/travin.JPG", description :"travin", Anxinhđep : "hihi"},

  ],
  Indian1      : [
    { id : 49, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/Black Galaxy- Slabs.JPG", description :"Black Galaxy- Slabs", Anxinhđep : "hihi"},
    { id : 50, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0008 (1).jpg", description :"IMG-20170402-WA0008 (1)", Anxinhđep : "hihi"},
    { id : 51, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0008.jpg", description :"IMG-20170402-WA0008", Anxinhđep : "hihi"},
    { id : 52, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ",  Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0009.jpg", description :"IMG-20170402-WA0009", Anxinhđep : "hihi"},
    { id : 53, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0010.jpg", description :"IMG-20170402-WA0010", Anxinhđep : "hihi"},
    { id : 54, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0011.jpg", description :"IMG-20170402-WA0011", Anxinhđep : "hihi"},
    { id : 55, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0012.jpg", description :"IMG-20170402-WA0012", Anxinhđep : "hihi"},
    { id : 56, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0013.jpg", description :"IMG-20170402-WA0013", Anxinhđep : "hihi"},  
    { id : 57, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0015.jpg", description :"IMG-20170402-WA0015", Anxinhđep : "hihi"},
    { id : 58, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0016.jpg", description :"IMG-20170402-WA0016", Anxinhđep : "hihi"},  
    { id : 59, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0017 (1).jpg", description :"IMG-20170402-WA0017 (1)", Anxinhđep : "hihi"},  
    { id : 60, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0017.jpg", description :"IMG-20170402-WA0017", Anxinhđep : "hihi"},  
    { id : 61, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0018.jpg", description :"IMG-20170402-WA0018", Anxinhđep : "hihi"},  
    { id : 62, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170911-WA0003.jpg", description :"IMG-20170911-WA0003", Anxinhđep : "hihi"},  
    { id : 63, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170911-WA0005.jpg", description :"IMG-20170911-WA0005", Anxinhđep : "hihi"},  
    { id : 64, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170911-WA0006.jpg", description :"IMG-20170911-WA0006", Anxinhđep : "hihi"},  
    { id : 65, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170926-WA0001.jpg", description :"IMG-20170926-WA0001", Anxinhđep : "hihi"},  
    { id : 66, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170926-WA0003.jpg", description :"IMG-20170926-WA0003", Anxinhđep : "hihi"},  
    { id : 67, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170926-WA0004.jpg", description :"IMG-20170926-WA0004", Anxinhđep : "hihi"},  
    { id : 68, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170926-WA0005.jpg", description :"IMG-20170926-WA0005", Anxinhđep : "hihi"},  
    { id : 69, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/denkimsatrung.jpg", description :"denkimsatrung", Anxinhđep : "hihi"},  
    { id : 70, optionEn : "Black Galaxy", optionVn : "Kim Sa Trung Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0004.jpg", description :"IMG-20170402-WA0004", Anxinhđep : "hihi"},    
  ],
  Indian2      : [
    { id : 71, optionEn : "Imperial Red", optionVn : "Đỏ Hoàng Gia", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial red 1.jpg", description :"Imperial red 1", Anxinhđep : "hihi" },
    { id : 72, optionEn : "Imperial Red", optionVn : "Đỏ Hoàng Gia", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial Red 2.jpg", description :"Imperial Red 2", Anxinhđep : "hihi" },
    { id : 73, optionEn : "Imperial Red", optionVn : "Đỏ Hoàng Gia", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial red 3.jpg", description :"Imperial red 3", Anxinhđep : "hihi" },
    { id : 74, optionEn : "Imperial Red", optionVn : "Đỏ Hoàng Gia", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Imperial Red - Đỏ Hoàng Gia/Imperial Red 4.jpg", description :"Imperial Red 4", Anxinhđep : "hihi" },
  ],
  Indian3      : [
    { id : 75, optionEn : "Ruby Red", optionVn : "Đỏ Ruby", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Ruby Red - Đỏ Ruby/Ruby Red.jpg", description :"Ruby Red", Anxinhđep : "hihi" },
  ],
  Indian4      : [
    { id : 76, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 1.jpg", description :"Tan Brown 1", Anxinhđep : "hihi" },
    { id : 77, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 2.JPG", description :"Tan Brown 2", Anxinhđep : "hihi" },
    { id : 78, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/Tan Brown 3.jpg", description :"Tan Brown 3", Anxinhđep : "hihi" },
    { id : 79, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0000.jpg", description :"IMG-20170402-WA0000", Anxinhđep : "hihi" },
    { id : 80, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0001.jpg", description :"IMG-20170402-WA0001", Anxinhđep : "hihi" },
    { id : 81, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0014.jpg", description :"IMG-20170402-WA0014", Anxinhđep : "hihi" },
    { id : 82, optionEn : "Tan Brown", optionVn : "Nâu Anh Ấn Độ", Origin : "Indian",OriginVn:"Ấn Độ", type : "indian", src :"../image/Indian/Tan Brown - Nâu Anh Ấn Độ/IMG-20170402-WA0019.jpg", description :"IMG-20170402-WA0019", Anxinhđep : "hihi" },
    
  ],
  Italy      : [
    { id : 83, optionEn : "Italian White", optionVn : "Vân Mây", Origin : "Italy",OriginVn:"Ý", type : "italy", src :"../image/Italy/Italian White - Vân Mây.jpg", description :"Italian White - Vân Mây", Anxinhđep : "hihi" },
    { id : 84, optionEn : "Italian White", optionVn : "Vân Mây", Origin : "Italy",OriginVn:"Ý", type : "italy", src :"../image/Italy/Italian White.jpg", description :"Italian White", Anxinhđep : "hihi" },
  ],
  Spain      : [
    { id : 85, optionEn : "Spain Brown", optionVn : "Nâu Tây Ban Nha", Origin : "Spain",OriginVn:"Tây Ban Nha", type : "spain", src :"../image/Spain/nautaybannha.jpg", description :"nautaybannha", Anxinhđep : "hihi" },
  ],
  Turkey      : [
    { id : 86, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey",OriginVn:"Thổ Nhĩ Kỳ", type : "turkey", src :"../image/Turkey/Goflan silver (2).jpg", description :"Goflan silver (2)", Anxinhđep : "hihi" },
    { id : 87, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey",OriginVn:"Thổ Nhĩ Kỳ", type : "turkey", src :"../image/Turkey/Goflan silver (4).jpg", description :"Goflan silver (4)", Anxinhđep : "hihi" },
    { id : 88, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey",OriginVn:"Thổ Nhĩ Kỳ", type : "turkey", src :"../image/Turkey/Goflan silver (5).jpg", description :"Goflan silver (5)", Anxinhđep : "hihi" },
    { id : 89, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey",OriginVn:"Thổ Nhĩ Kỳ", type : "turkey", src :"../image/Turkey/HEMOGIN.jpg", description :"HEMOGIN", Anxinhđep : "hihi" },
    { id : 90, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey",OriginVn:"Thổ Nhĩ Kỳ", type : "turkey", src :"../image/Turkey/Homogene (2).jpg", description :"Homogene (2)", Anxinhđep : "hihi" },
    { id : 91, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey",OriginVn:"Thổ Nhĩ Kỳ", type : "turkey", src :"../image/Turkey/Homogene (3).jpg", description :"Homogene (3)", Anxinhđep : "hihi" },
    { id : 92, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey",OriginVn:"Thổ Nhĩ Kỳ", type : "turkey", src :"../image/Turkey/Travertine light c.c (2).jpg", description :"Travertine light c.c (2)", Anxinhđep : "hihi" },
    { id : 93, optionEn : "Turkey", optionVn : "Thổ Nhĩ Kỳ", Origin : "Turkey",OriginVn:"Thổ Nhĩ Kỳ", type : "turkey", src :"../image/Turkey/travertine medium quality (2).jpeg", description :"travertine medium quality (2)", Anxinhđep : "hihi" },
   ],
  VietNam     : [
    { id : 94, optionEn : "Vang Binh Dinh", optionVn : "Vàng Bình Định", Origin : "VietNam",OriginVn:"Việt Nam", type : "vietnam", src :"../image/VietNam/vang binh dinh.jpg", description :"vang binh dinh", Anxinhđep : "hihi" },
  ]                   
};



const reducer = (state = defaultState, action) => {
  return state;
};

const store = createStore(reducer);


class Result extends React.Component {
  
  render() {

    return (
      
      <Provider store={store}>
         
         <Data />
        
      </Provider>
      
    );
  }

};

render(<Result/>, window.document.getElementById("root"));




