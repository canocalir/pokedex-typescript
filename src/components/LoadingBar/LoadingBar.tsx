import { FC } from "react"
import { LoadingBarContainer, Spinner } from "./LoadingBar.styled"

const LoadingBar: FC = () => {
  return (
    <LoadingBarContainer>
        <Spinner/>
    </LoadingBarContainer>
  )
}

export default LoadingBar