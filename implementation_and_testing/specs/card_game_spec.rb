require("minitest/autorun")
require_relative("../card_game")
require_relative("../card")

class TestCardGame < MiniTest::Test

  def setup
    @card1 = Card.new("club", 1)
    @card2 = Card.new("heart", 3)
    @card3 = Card.new("spade", 6)
    @cardgame = CardGame.new()
  end

  def test_card_for_ace()
    card = @cardgame.checkforAce(@card1)
    assert_equal(true, card)
  end

  def test_card_for_not_ace()
    card = @cardgame.checkforAce(@card2)
    assert_equal(false, card)
  end

  def test_highest_card()
    value = @cardgame.highest_card(@card1, @card2)
    assert_equal(@card2, value)
  end

  def test_total_value_of_cards()
    total = CardGame.cards_total([@card1, @card2, @card3])
    assert_equal("You have a total of 10", total)
  end

end
