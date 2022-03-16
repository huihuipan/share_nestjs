import { Injectable } from '@nestjs/common';
import { IdDto } from './dto/id.dto';
import { PersonDTO } from './dto/person.dto';

// 这里为了做数据存储，用一个数组对象代替数据库，数据库不在本次分享内容之内
let mockId = 1 // 模拟子增id
const list = []

@Injectable()
export class PersonService {

  // 获取列表
  getList() {
    console.log('service')
    return list
  }

  // 获取详情
  getDetail(idDto: IdDto) {
    console.log(idDto)
    console.log(list, list.find(item => item.id === Number(idDto.id)))
    return list.find(item => item.id === Number(idDto.id))
  }

  // 新增数据
  add(person: PersonDTO) {
    
    list.push({
      ...person,
      id: mockId,
    })

    mockId++
    return {
      code: 200,
      message: '创建成功'
    }
  }

  // 新增数据
  update(person: PersonDTO) {
    let has = false
    for (let i = 0; i < list.length; i++) {
      console.log(person.id, list[i].id)
      if (person.id === list[i].id) {
        has = true
        list.splice(i, 1, person)
        break
      }
    }
    if (has) {
      return {
        code: 200,
        message: '修改成功'
      }
    }
    return {
      code: 400,
      message: '修改失败，找不到数据'
    }
  }

  // 删除数据
  delete(idDto: IdDto) {
    let has = false
    for (let i = 0; i < list.length; i++) {
      if (idDto.id === list[i].id) {
        has = true
        list.splice(i, 1)
        break
      }
    }
    if (has) {
      return {
        code: 200,
        message: '删除成功'
      }
    }
    return {
      code: 400,
      message: '删除失败，找不到数据'
    }
  }

}
