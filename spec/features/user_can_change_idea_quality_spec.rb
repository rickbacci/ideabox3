require 'rails_helper'

RSpec.feature "Idea quality", :type => :feature do

  scenario "User can decrement quality", js: true do
    Idea.create!(title: 'New Idea', body: 'New Idea Body')

    visit root_path

    expect(page).to have_content('plausible')

    find('.thumbs-down').click

    expect(page).to_not have_content('swill')
  end
end
