import axios from "axios";
import type { Jogo } from '@/interfaces/Jogo'
import { idText } from "typescript";


const api = axios.create({
    baseURL: '//localhost:3000'
})

export async function getJogos(){
    const response = await api.get(`/jogos`)
    return response.data
}

export async function getJogoById(id: number | string){
    const response = await api.get(`/jogos/${id}`)
    return response.data
}

export async function postJogo(Jogo: Omit<Jogo, 'id'>) {
    const response = await api.post(`/jogos`, Jogo)
    return response.data
}

export async function putJogo(id: number | string, Jogo: Omit<Jogo, 'id'>) {
    const response = await api.put(`/jogos/${id}/editar`, Jogo)
    return response.data
}

export async function deleteJogo(id: number | string){
    const response = await api.delete(`/jogos/${id}`)
    return response.data
}