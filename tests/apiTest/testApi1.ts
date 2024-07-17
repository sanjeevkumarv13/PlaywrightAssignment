import {test, expect} from '@playwright/test'
import { request } from 'http';
import { json } from 'stream/consumers';

test('Get Request',async()=>{
    const baseUrl = 'https://reqres.in/api'

    test('Get Request',async({request})=>{
        const response = await request.get('${baseUrl}/users/2')
        expect(response.status()).toBe(200)

        const responseBoby=JSON.parse(await response.text())
        expect(responseBoby.data.id).toBe(2)
    })

    test('Post Request',async({request})=>{
        const response=await request.post('${baseUrl}/users',{
            data:{
                id: 100,
            }
        })
        const responseBoby=JSON.parse(await response.text())
        console.log(responseBoby)
        expect(responseBoby.id).toBe(100)
    })
})