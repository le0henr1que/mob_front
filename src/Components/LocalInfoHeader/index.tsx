import { Comments } from "../../@types";
import { Text } from "../Text";
import { Star } from "@material-ui/icons";
import "./styles.css";
import { StarRating } from "../StarRating";
import ButtonStyle from "../Button";
import { Chart } from "../Chart";
import { useNavigate } from "react-router-dom";

export function Company() {
  const navigate = useNavigate();
  const data = [1, 7, 9, 5, 10];
  return (
    <>
      <div className="header-company">
        <div className="header-company-center">
          {/* 
                <div className="header-side-avatar-company">
                    <div className="avatar-company">LB</div>
                    
                </div> */}

          <div className="header-side-company">
            <div className="avatar-company">LB</div>
            <div className="title-company-title">
              <Text variant="font-semibold title-2">Lojas Brasileiras</Text>
              <div className="heder-subtitle-company">
                <StarRating
                  variant="nothing"
                  rating={2}
                  starType="view"
                  size="small"
                />
                <Text variant="font-semibold body-small">3.7</Text>
                <Text variant="muthed font-regular body-small">
                  Avaliação geral
                </Text>
              </div>
              <Text variant="muthed font-regular body-small">
                São Paulo - Osasco Super Shopping
              </Text>
              <Text variant="muthed font-regular caption">17 Avaliações</Text>
              <ButtonStyle
                variant="medium-button outlined"
                onClick={() => navigate("/local/avaliar")}
              >
                Avaliar local
              </ButtonStyle>
            </div>
          </div>

          <div className="header-side-rating">
            <div className="header-side-rating-chart">
              <Chart data={data} />
            </div>
            {/* <div className="header-side-rating-note">
                        <Text variant="font-semibold title-3">Classificação</Text>
                        <Text variant="font-semibold title-1">3.7</Text>
                        <StarRating variant="nothing" rating={2} starType="view" size="small" />                            
                        <Text variant="muthed font-regular caption">17 Avaliações</Text>
                    </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
