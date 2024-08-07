import _ from "lodash"
import store from "../plugins/store"
import router from "../plugins/router"
import { defineEmits } from 'vue'


/**
 * param으로 넘어온 데이터를 key:value 쌍으로 반환한다.
 * @param selectItf
 * @returns codeList
 */
function setSelectItems(param) {
  const codeList = [{}]

      for(let i = 0; i < param.length; i++) {
        const obj = {
          label:"",
          value:""
        }

        obj.label = param[i].codeName

        obj.value = param[i].code

        codeList.push(obj)
      }

      return codeList
}

/**
 * 테이블에 보여질 데이터만 가공하여 반환한다.
 * @param header table header
 * @param list table list
 * @returns items
 */
function setTable(header, list) {
  const items = []
  const keys = []
  
  for(let i = 0; i < header.length; i++) {
    keys[i] = header[i].key 
  }

  for(let j = 0; j < list.length; j++) {
    items.push(_.pick(list[j], keys)) 
  }

  return items
}

/**
 * 검색 조건 초기화
 */
function reset(param) {

  const obj = {}

  Object.keys(param).forEach((key) => {
    if(typeof(key) == 'string') obj[key] = ""
    else if(typeof(key) == 'number') obj[key] = 0
    else if(typeof(key) == 'boolean') obj[key] = false
  })
  
  return obj;
}

/**
 * 뒤로가기 시 검색조건을 유지시킨다.
 * @param param 검색조건
 * @returns form
 */
function storeBackData(param) {      
  const form = JSON.parse(sessionStorage.getItem("form"))         // 이전 파라미터

  const initForm = JSON.parse(sessionStorage.getItem("initForm")) // 해당 페이지의 초기 파라미터

  const isRouteBack = store.state.isRouteBack                     // router.back() 여부

  if(_.isEmpty(initForm) || JSON.stringify(Object.keys(param)) !== JSON.stringify(Object.keys(initForm))) { // 최초 진입시 파라미터 설정
    sessionStorage.setItem("form", JSON.stringify(param))

    sessionStorage.setItem("initForm", JSON.stringify(param))
  } else if(isRouteBack) { // router.back()으로 이동해 왔다면 이전 파라미터 그대로 리턴
    store.commit('setIsRouteBack', false)
    
    return form
  } else { // 파라미터 반영
    sessionStorage.setItem("form", JSON.stringify(param))
  }
  
  return JSON.parse(sessionStorage.getItem("form"))
}

/**
 * 뒤로가기
 */
function back() {
  store.commit('setIsRouteBack', true)

  router.back()
}

/**
 * 상세보기로 들어온 페이지일 경우 true를 반환한다.
 * @returns boolean
 */
function isUpdate() {
  let result = false

  if(history.state.searchParams != null && history.state.searchParams != 'undefined') {
    result = true
  }

  return result
}

function showAlertModal(msg) {
  const emit = defineEmits(["showAlertModal"])
  emit('showAlertModal', msg)
}

export default {    
    setTable,    
    reset,    
    storeBackData,    
    setSelectItems,
    back,
    isUpdate,
    showAlertModal
}

