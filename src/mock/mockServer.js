import Mock from 'mockjs'
import ApiData from './data'

Mock.mock('/homedata', {code: 0 ,data:ApiData.homepage})
Mock.mock('/Classificationdata', {code: 0 ,data:ApiData.brand})

