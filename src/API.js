import axios from "axios"

export const getProduct = ()=>{
    return axios({
        method: 'get',
        url: '/api/product',
      })
        .then(res => {
            console.log(res,"resultat api product"); 
            return res
        })
        .catch(err => {
          console.log(err, 'err client')
        })
}

export const getProductDetails = (id)=>{
    return axios({
        method: 'get',
        url: `/api/product/${id}`,
      })
        .then(res => {
            console.log(res,"resultat API details"); 
            return res
        })
        .catch(err => {
          console.log(err, 'err client')
        })
}


// return axios({
//     method: 'put',
//     url: '/update',
//     data: { postID, title, comment }
//   })
//     .then(res => res)
//     .catch(err => {
//       console.log(err, 'err client')
//     })