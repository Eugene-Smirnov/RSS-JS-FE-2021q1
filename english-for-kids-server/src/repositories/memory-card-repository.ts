import { CreateCardDto } from '../dto/create-card';
import { CardRepository } from '../interfaces/card-repository';
import { Card } from '../models/card';

export class MemoryCardRepository implements CardRepository {
  private cards: Card[] = [
    // Animals set A #0
    new Card('bird', 'Bird', '../images/animal-a/bird.jpg', '../audio/animal-a/bird.mp3', 'Птица', '0', '0'),
    new Card('cat', 'Cat', '../images/animal-a/cat.jpg', '../audio/animal-a/cat.mp3', 'Кот', '0', '1'),
    new Card('chick', 'Chick', '../images/animal-a/chick.jpg', '../audio/animal-a/chick.mp3', 'Цыплёнок', '0', '2'),
    new Card('dog', 'Dog', '../images/animal-a/dog.jpg', '../audio/animal-a/dog.mp3', 'Собака', '0', '3'),
    new Card('dolphin', 'Dolphin', '../images/animal-a/dolphin.jpg', '../audio/animal-a/dolphin.mp3', 'Дельфин', '0', '4'),
    new Card('fish', 'Fish', '../images/animal-a/fish.jpg', '../audio/animal-a/fish.mp3', 'Рыба', '0', '5'),
    new Card('frog', 'Frog', '../images/animal-a/frog.jpg', '../audio/animal-a/frog.mp3', 'Лягушка', '0', '6'),
    new Card('giraffe', 'Giraffe', '../images/animal-a/giraffe.jpg', '../audio/animal-a/giraffe.mp3', 'Жираф', '0', '7'),
    // Animals set B #1
    new Card('chicken', 'Chicken', '../images/animal-b/chicken.jpg', '../audio/animal-b/chicken.mp3', 'Курица', '1', '8'),
    new Card('horse', 'Horse', '../images/animal-b/horse.jpg', '../audio/animal-b/horse.mp3', 'Лошадь', '1', '9'),
    new Card('lion', 'Lion', '../images/animal-b/lion.jpg', '../audio/animal-b/lion.mp3', 'Лев', '1', '10'),
    new Card('mouse', 'Mouse', '../images/animal-b/mouse.jpg', '../audio/animal-b/mouse.mp3', 'Мышь', '1', '11'),
    new Card('pig', 'pig', '../images/animal-b/pig.jpg', '../audio/animal-b/pig.mp3', 'Свинья', '1', '12'),
    new Card('rabbit', 'Rabbit', '../images/animal-b/rabbit.jpg', '../audio/animal-b/rabbit.mp3', 'Кролик', '1', '13'),
    new Card('sheep', 'Sheep', '../images/animal-b/sheep.jpg', '../audio/animal-b/sheep.mp3', 'Овца', '1', '14'),
    new Card('turtle', 'Turtle', '../images/animal-b/turtle.jpg', '../audio/animal-b/turtle.mp3', 'Черепаха', '1', '15'),
    // Animals set C #2
    new Card('antelope', 'Antelope', '../images/animal-c/antelope.jpg', '../audio/animal-c/antelope.mp3', 'Антилопа', '2', '16'),
    new Card('bear', 'Bear', '../images/animal-c/bear.jpg', '../audio/animal-c/bear.mp3', 'Медведь', '2', '17'),
    new Card('buffalo', 'Buffalo', '../images/animal-c/buffalo.jpg', '../audio/animal-c/buffalo.mp3', 'Буйвол', '2', '18'),
    new Card('cow', 'Cow', '../images/animal-c/cow.jpg', '../audio/animal-c/cow.mp3', 'Корова', '2', '19'),
    new Card('flamingo', 'Flamingo', '../images/animal-c/flamingo.jpg', '../audio/animal-c/flamingo.mp3', 'Фламинго', '2', '20'),
    new Card('fox', 'Fox', '../images/animal-c/fox.jpg', '../audio/animal-c/fox.mp3', 'Лиса', '2', '21'),
    new Card('hedgehog', 'Hedgehog', '../images/animal-c/hedgehog.jpg', '../audio/animal-c/hedgehog.mp3', 'Ёж', '2', '22'),
    new Card('squirrel', 'Squirrel', '../images/animal-c/squirrel.jpg', '../audio/animal-c/squirrel.mp3', 'Белка', '2', '23'),
    // Food #3
    new Card('carrot', 'Carrot', '../images/food/carrot.jpg', '../audio/food/carrot.mp3', 'Морковь', '3', '24'),
    new Card('donut', 'Donut', '../images/food/donut.jpg', '../audio/food/donut.mp3', 'Пончик', '3', '25'),
    new Card('pear', 'Pear', '../images/food/pear.jpg', '../audio/food/pear.mp3', 'Груша', '3', '26'),
    new Card('pizza', 'Pizza', '../images/food/pizza.jpg', '../audio/food/pizza.mp3', 'Пицца', '3', '27'),
    new Card('radish', 'Radish', '../images/food/radish.jpg', '../audio/food/radish.mp3', 'Редис', '3', '28'),
    new Card('strawberry', 'Strawberry', '../images/food/strawberry.jpg', '../audio/food/strawberry.mp3', 'Клубника', '3', '29'),
    new Card('tomatoes', 'Tomatoes', '../images/food/tomatoes.jpg', '../audio/food/tomatoes.mp3', 'Помидоры', '3', '30'),
    new Card('watermelon', 'Watermelon', '../images/food/watermelon.jpg', '../audio/food/watermelon.mp3', 'Арбуз', '3', '31'),
    // Action (set A) #4
    new Card('cry', 'Cry', '../images/action-a/cry.jpg', '../audio/action-a/cry.mp3', 'Плакать', '4', '32'),
    new Card('dance', 'Dance', '../images/action-a/dance.jpg', '../audio/action-a/dance.mp3', 'Танцевать', '4', '33'),
    new Card('dive', 'Dive', '../images/action-a/dive.jpg', '../audio/action-a/dive.mp3', 'Нырять', '4', '34'),
    new Card('draw', 'Draw', '../images/action-a/draw.jpg', '../audio/action-a/draw.mp3', 'Рисовать', '4', '35'),
    new Card('fish', 'Fish', '../images/action-a/fish.jpg', '../audio/action-a/fish.mp3', 'Ловить рыбу', '4', '36'),
    new Card('hug', 'Hug', '../images/action-a/hug.jpg', '../audio/action-a/hug.mp3', 'Обнимать', '4', '37'),
    new Card('jump', 'Jump', '../images/action-a/jump.jpg', '../audio/action-a/jump.mp3', 'Прыгать', '4', '38'),
    new Card('open', 'Open', '../images/action-a/open.jpg', '../audio/action-a/open.mp3', 'Открывать', '4', '39'),
    // Action (set B) #5
    new Card('fly', 'Fly', '../images/action-b/fly.jpg', '../audio/action-b/fly.mp3', 'Летать', '5', '40'),
    new Card('play', 'Play', '../images/action-b/play.jpg', '../audio/action-b/play.mp3', 'Играть', '5', '41'),
    new Card('point', 'Point', '../images/action-b/point.jpg', '../audio/action-b/point.mp3', 'Указывать', '5', '42'),
    new Card('ride', 'Ride', '../images/action-b/ride.jpg', '../audio/action-b/ride.mp3', 'Ездить', '5', '43'),
    new Card('run', 'Run', '../images/action-b/run.jpg', '../audio/action-b/run.mp3', 'Бегать', '5', '44'),
    new Card('skip', 'Skip', '../images/action-b/skip.jpg', '../audio/action-b/skip.mp3', 'Пропускать, прыгать', '5', '45'),
    new Card('sing', 'Sing', '../images/action-b/sing.jpg', '../audio/action-b/sing.mp3', 'Петь', '5', '46'),
    new Card('swim', 'Swim', '../images/action-b/swim.jpg', '../audio/action-b/swim.mp3', 'Плавать', '5', '47'),
    // Clothes #6
    new Card('blouse', 'Blouse', '../images/clothes/blouse.jpg', '../audio/clothes/blouse.mp3', 'Блузка', '6', '48'),
    new Card('boot', 'Boot', '../images/clothes/boot.jpg', '../audio/clothes/boot.mp3', 'Ботинок', '6', '49'),
    new Card('coat', 'Coat', '../images/clothes/coat.jpg', '../audio/clothes/coat.mp3', 'Пальто', '6', '50'),
    new Card('dress', 'Dress', '../images/clothes/dress.jpg', '../audio/clothes/dress.mp3', 'Платье', '6', '51'),
    new Card('pants', 'Pants', '../images/clothes/pants.jpg', '../audio/clothes/pants.mp3', 'Брюки', '6', '52'),
    new Card('shirt', 'Shirt', '../images/clothes/shirt.jpg', '../audio/clothes/shirt.mp3', 'Рубашка', '6', '53'),
    new Card('shoe', 'Shoe', '../images/clothes/shoe.jpg', '../audio/clothes/shoe.mp3', 'Туфли', '6', '54'),
    new Card('skirt', 'Skirt', '../images/clothes/skirt.jpg', '../audio/clothes/skirt.mp3', 'Юбка', '6', '55'),
    // Emotions #7
    new Card('angry', 'Angry', '../images/emotions/angry.jpg', '../audio/emotions/angry.mp3', 'Сердитый', '7', '56'),
    new Card('happy', 'Happy', '../images/emotions/happy.jpg', '../audio/emotions/happy.mp3', 'Счастливый', '7', '57'),
    new Card('laugh', 'Laugh', '../images/emotions/laugh.jpg', '../audio/emotions/laugh.mp3', 'Смех', '7', '58'),
    new Card('sad', 'Sad', '../images/emotions/sad.jpg', '../audio/emotions/sad.mp3', 'Грустный', '7', '59'),
    new Card('scared', 'Scared', '../images/emotions/scared.jpg', '../audio/emotions/scared.mp3', 'Испуганный', '7', '60'),
    new Card('smile', 'Smile', '../images/emotions/smile.jpg', '../audio/emotions/smile.mp3', 'Улыбка', '7', '61'),
    new Card('surprised', 'Surprised', '../images/emotions/surprised.jpg', '../audio/emotions/surprised.mp3', 'Удивлённый', '7', '62'),
    new Card('tired', 'Tired', '../images/emotions/tired.jpg', '../audio/emotions/tired.mp3', 'Уставший', '7', '63'),
  ];

  async create(createCardDto: CreateCardDto, categoryId: string): Promise<Card> {
    const { name, title, image, audio, translation } = createCardDto;
    const card = new Card(name, title, image, audio, translation, categoryId);
    this.cards.push(card);
    return card;
  }

  async get(id: string): Promise<Card | null> {
    return this.cards.find(card => card.id === id) ?? null;
  }

  async getByCategory(id: string): Promise<Card[]> {
    return this.cards.filter(card => card.categoryId === id);
  }

  async update(id: string, card: Partial<CreateCardDto>): Promise<Card | null> {
    const index = this.cards.findIndex(card => card.id === id);

    if (index === -1) {
      return null;
    }

    const updatedCard = this.cards[index].update(card);
    this.cards[index] = updatedCard;
    return updatedCard;
  }

  async remove(id: string): Promise<Card | null> {
    const index = this.cards.findIndex(card => card.id === id);

    if (index === -1) {
      return null;
    }

    const cardToRemove = this.cards[index];
    this.cards.splice(index, 1);
    return cardToRemove;
  }

  async removeByCategory(id: string): Promise<Card[]> {
    const removedCards: Card[] = this.cards.filter(card => card.id === id);
    this.cards = this.cards.filter(card => card.id !== id);
    return removedCards;
  }
}
