import ioContext from '../../common/io-context'
import {get, post, groupApi, groupConfigApi} from '../../common/util'

const api = {
  getEntityList: post(`${groupApi}/obj_list`), // 实体列表
  addGroup: post(`${groupApi}/add_group`), // 新建群体
  editGroup: post(`${groupApi}/edit_group`), // 编辑群体
  getOutputTags: post(`${groupApi}/tag_list`), // 获取输出标签
  getConfigTagList: post(`${groupApi}/obj_target_tag_list`), // 获取对象对应已同步的标签列表
  getDetail: post(`${groupApi}/get_group_edit`), // 编辑群体详情信息
  checkName: post(`${groupApi}/checkName`), // 群体名称查重

  getRelList: get(`${groupApi}/relation_list`), // 获取对象对应的关系列表
  getOtherEntity: get(`${groupApi}/other_entity`), // 获取另一个实体对象

}

ioContext.create('groupRule', api) 

export default ioContext.api.groupRule
