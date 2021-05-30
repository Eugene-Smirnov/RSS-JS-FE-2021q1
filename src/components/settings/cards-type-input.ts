import { ImageCategoryModel } from '../../models/image-category-models';
import { settingsSingleton } from '../../services/settings-service/settings-service';
import { SettingsInput } from './settings-input';

// <select name="select-animal" id="select-animal" class="popup-form__select
// popup-form__select_animal" required="">
//   <option value="panda" class="popup-form__animal-option">panda</option>
//   <option value="eagle" class="popup-form__animal-option">eagle</option>
//   <option value="alligator" class="popup-form__animal-option">alligator</option>
//   <option value="gorilla" class="popup-form__animal-option">gorilla</option>
// </select>

export class CardsTypeInput extends SettingsInput {
  constructor() {
    super();
    this.element.setAttribute('name', 'card-type-input');
    this.element.setAttribute('id', 'card-type-input');
    CardsTypeInput.getTypes().then((categories) => {
      categories.forEach((cat: string) => {
        const option = document.createElement('option');
        option.classList.add('settings-option');
        option.setAttribute('value', cat);
        option.innerText = cat;
        this.element.append(option);
      });
    });

    this.getValue();
  }

  private static async getTypes(): Promise<string[]> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const categoriesList: string[] = [];
    categories.forEach((elem) => categoriesList.push(elem.category));
    return categoriesList;
  }

  public getValue(): void {
    if (settingsSingleton.cardsType) {
      this.element.value = settingsSingleton.cardsType;
    }
  }

  public setValue(): void {
    const { value } = this.element;
    if (value) settingsSingleton.cardsType = value;
  }
}
