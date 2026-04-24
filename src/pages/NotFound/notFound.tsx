import * as S from "./styled";

function NotFound() {
  return (
    <S.NotFoundContainer>
      <S.NotFoundBox>
        <S.NotFoundText>
          <S.NotFoundTitle>404</S.NotFoundTitle>
          <S.NotFoundSubtitle>Sayfa Bulunamadı!</S.NotFoundSubtitle>
        </S.NotFoundText>
        <S.NotFoundDescription>
          Aradığınız sayfa mevcut değil. Lütfen URL'yi kontrol edin ve tekrar
          deneyin.
        </S.NotFoundDescription>
        <S.ActionButtonsContainer>
          <S.GoBackButton onClick={() => window.history.back()}>
            Geri Dön
          </S.GoBackButton>
          <S.GoHomeButton onClick={() => (window.location.href = "/")}>
            Ana Sayfa
          </S.GoHomeButton>
        </S.ActionButtonsContainer>
      </S.NotFoundBox>
    </S.NotFoundContainer>
  );
}

export default NotFound;
