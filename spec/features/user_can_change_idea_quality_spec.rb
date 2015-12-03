require 'rails_helper'

RSpec.feature "Idea quality", :type => :feature do

  scenario "User can decrement quality", js: true do

    visit root_path

    fill_in 'title', with: 'New Idea'
    fill_in 'body', with: 'New idea body'

    click_on "Create Idea"

    expect(page).to have_content('swill')

    find('.thumbs-up').click

    expect(page).to_not have_content('plausible')
  end
end
