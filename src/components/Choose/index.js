import styled from "styled-components"

const Choose = ({data, addProductToKorzina, changeSoni}) => (
    <ChooseWrapper>
        <div className="chooseProduct row bg-white py-3 rounded shadow">
            <div className="col-sm-6">
                <img className="img-fluid w-100" src={data.img} alt={data.name} />
            </div>
            <div className="col-sm-6 d-flex flex-column justify-content-between">
                <div className="content">
                    <h3>{data.name}</h3>
                    <p>{data.desc}</p>
                </div>
                <div>
                    <div className="d-flex justify-content-between aligin-items-center">
                        <h4>{data.price * data.soni}</h4>
                        <div className="btn-group">
                            <button className="styledBtn" onClick={() => {
                                changeSoni(false)
                            } }>-</button>
                            <button className="styledBtn">{data.soni}</button>
                            <button className="styledBtn" onClick={() => {
                                changeSoni(true)
                            } }>+</button>
                        </div>
                    </div>
                    <button className="styledBtn" onClick={() => {
                        addProductToKorzina(data)
                    } }>Korzinaga qo'shish</button>
                </div>
            </div>
        </div>
    </ChooseWrapper>
)

const ChooseWrapper = styled.div`
`

export default Choose;