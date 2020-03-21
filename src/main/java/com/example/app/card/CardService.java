package com.example.app.card;

import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

@Service
public class CardService {
    private <E extends Enum<E>> E getNullableEnumFromJSON(Class<E> clazz, String enumValue) {
        return enumValue != null ? E.valueOf(clazz, enumValue) : null;
    };

    private Card getCardFromJSONObject(JSONObject jsonCard) {
        String id = (String) jsonCard.get("id");
        String name = (String) jsonCard.get("name");
        String text = (String) jsonCard.get("text");
        String flavor = (String) jsonCard.get("flavor");
        Long attack = (Long) jsonCard.get("attack");
        CardClass cardClass = getNullableEnumFromJSON(CardClass.class, (String) jsonCard.get("cardClass"));
        Long cost = (Long) jsonCard.get("cost");
        Long health = (Long) jsonCard.get("health");
//                String[] mechanics = (String[]) jsonCard.get("mechanics");
        String rarity = (String) jsonCard.get("rarity");
        String set = (String) jsonCard.get("set");
        String type = (String) jsonCard.get("type");
        String imageUrl = "https://art.hearthstonejson.com/v1/render/latest/plPL/256x/" + id + ".png";

        return new Card(id, imageUrl, name, text, flavor, attack, cardClass, cost, health, rarity, set, type);
    }

    private JSONArray getCardsAsJSONArray() {
        // todo Objects.requireNonNull
        String jsonDataDirPath = Objects.requireNonNull(getClass().getClassLoader().getResource("static/json/pl/25770.json")).getPath();
        JSONParser parser = new JSONParser();

        try {
            Object obj = parser.parse(new FileReader(jsonDataDirPath));
            return (JSONArray) obj;
        } catch (Exception e) {
            e.printStackTrace();
        }

        // todo
        return new JSONArray();
    }

    private List<Card> getCardEntityFromJson() {
        List<Card> cardList = new ArrayList<>();
        JSONArray cards = getCardsAsJSONArray();

        for (Object card : cards) {
            JSONObject jsonCard = (JSONObject) card;

            cardList.add(getCardFromJSONObject(jsonCard));
        }

        return cardList;
    }

    private Card getCardEntityFromJson(String cardId) {
        JSONArray cards = getCardsAsJSONArray();

        for (Object card : cards) {
            JSONObject jsonCard = (JSONObject) card;
            String id = (String) jsonCard.get("id");

            if (id.equals(cardId)) {
                return getCardFromJSONObject(jsonCard);
            }
        }

        // todo
        return new Card("", "", "", "", "", 0L, null, 0L, 0L, "", "", "");
    }

    public List<Card> getCards() {
        return getCardEntityFromJson();
    }

    public Card getCard(String cardId) {
        return getCardEntityFromJson(cardId);
    }
}
