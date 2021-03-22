import React, { useState, useEffect } from 'react'
import styles from './UserList.less'
import UserListBtn from './UserListBtn'
import UserListTable from './UserListTable'
import MyBreadcrumb from '@/components/MyBreadcrumb'
import { connect, Dispatch } from 'umi'
import { userModleStateType, ElementType } from './model'
const UserList = ({ list, total, dispatch }: { list: ElementType[], total: number, dispatch: Dispatch }) => {
  useEffect(() => {
    dispatch({
      type: 'user/getList',
      payload: {
        query: '',
        pagenum: 1,
        pagesize: 5
      }
    })
  }, [])
  return <div className={styles.user}>
    <MyBreadcrumb index={0}/>
    <div className={styles.container}>
    <UserListBtn dispatch={dispatch}/>
    <UserListTable  list={list} total={total} dispatch={dispatch}/>
    </div>
  </div>
}


export default connect(
  ({ user }: { user: userModleStateType }) => user
)(UserList)