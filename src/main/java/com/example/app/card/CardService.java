package com.example.app.card;

import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

@Service
public class CardService {
    // todo: think about json getters (list and one entity)
    private List<Card> getCardEntityFromJson() {
        String jsonDataDirPath = getClass().getClassLoader().getResource("static/json/pl/25770.json").getPath();
        List<Card> cardList = new ArrayList<>();
        JSONParser parser = new JSONParser();

        try {
            Object obj = parser.parse(new FileReader(jsonDataDirPath));
            JSONArray cards = (JSONArray) obj;

            for (Object card : cards) {
                JSONObject jsonCard = (JSONObject) card;

                String id = (String) jsonCard.get("id");
                String imageUrl = "https://art.hearthstonejson.com/v1/render/latest/plPL/256x/" + id + ".png";

                cardList.add(new Card(id, imageUrl));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return cardList;
    }

    private Card getCardEntityFromJson(String cardId) {
        String jsonDataDirPath = getClass().getClassLoader().getResource("static/json/pl/25770.json").getPath();
        JSONParser parser = new JSONParser();

        try {
            Object obj = parser.parse(new FileReader(jsonDataDirPath));
            JSONArray cards = (JSONArray) obj;

            for (Object card : cards) {
                JSONObject jsonCard = (JSONObject) card;

                String id = (String) jsonCard.get("id");
                String imageUrl = "https://art.hearthstonejson.com/v1/render/latest/plPL/256x/" + id + ".png";

                if (id.equals(cardId)) {
                    return new Card(id, imageUrl);
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return new Card("", "");
    };

    public List<Card> getCards() {
        return getCardEntityFromJson();
    }

    public Card getCard(String cardId) {
        return getCardEntityFromJson(cardId);
    }
}
